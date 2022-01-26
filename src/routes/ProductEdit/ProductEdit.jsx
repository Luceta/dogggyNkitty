import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import useInput from "../../components/hooks/useInput";
import { getProductDetailAPI, updateProductDetailAPI } from "../../api/api";
import { numberWithComma, numberWithoutComma } from "../../utils/number";

function ProductEdit({ history }) {
  const { productId } = useParams();
  const productName = useInput("");
  const price = useInput("");
  const storeLink = useInput("");
  const [productImg, setProductImg] = useState(null);
  const [button, setButton] = useState(true);

  const getProductInfo = async (product) => {
    const result = await (await getProductDetailAPI(product)).json();

    productName.setValue(result.product.itemName);
    price.setValue(result.product.price.toString());
    storeLink.setValue(result.product.link);
    setProductImg(result.product.itemImage);
  };

  const handleBacktoLink = () => {
    history.push("/profile");
  };

  const numberCheck = (ev) => {
    const char = String.fromCharCode(ev.which);
    const numberReg = /[0-9]/;

    if (!numberReg.test(char)) {
      ev.preventDefault();
    }
  };

  const handlePriceKeyPress = (ev) => {
    numberCheck(ev);
  };

  const handlePriceBlur = () => {
    const data = price.value;
    const productPrice = numberWithComma(data);

    price.setValue(productPrice);
  };

  const productNameValidation = () => {
    const dataLength = productName.value.split("").length;
    let valueStatus = true;
    if (dataLength < 2 || dataLength > 10) {
      valueStatus = false;
    }
    return valueStatus;
  };

  const urlValidation = () => {
    const data = storeLink.value;
    const dataLength = data.split("").length;
    let valueStatus = false;

    if (dataLength !== 0) {
      const urlReg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/;
      if (urlReg.test(data)) {
        valueStatus = true;
      }
    }

    return valueStatus;
  };

  const isButtonAcitve = () => {
    const urlTest = urlValidation();
    const productTest = productNameValidation();
    const priceTest = price.value.split("").length;

    if (priceTest > 0 && urlTest && productTest) {
      setButton(false);
    }
  };

  const updateProduct = async () => {
    const priceWithoutComma = numberWithoutComma(price.value);
    const data = {
      product: {
        itemName: productName.value,
        price: priceWithoutComma,
        link: storeLink.value,
        itemImage: productImg,
      },
    };
    try {
      const result = await (await updateProductDetailAPI(productId, data)).json();
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isButtonAcitve();
  }, [urlValidation, productNameValidation, productImg, price]);

  useEffect(() => {
    if (productId) {
      getProductInfo(productId);
    }
  }, [productId]);

  return (
    <Product
      product={productName}
      productImg={productImg}
      price={price}
      storeLink={storeLink}
      setButton={button}
      handleBacktoLink={handleBacktoLink}
      handlePriceKeyPress={handlePriceKeyPress}
      handlePriceBlur={handlePriceBlur}
      handleClick={updateProduct}
    />
  );
}

export default ProductEdit;
