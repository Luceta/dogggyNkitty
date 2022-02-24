import React, { useState, useEffect } from "react";
import Product from "./Product";
import useInput from "../../components/hooks/useInput";
import imageUpload from "../../utils/upload";
import { uploadProduct } from "../../api/api";
import { numberWithoutComma, numberWithComma } from "../../utils/number";

export default function ProductContainer({ history }) {
  const productName = useInput("");
  const price = useInput("");
  const storeLink = useInput("");
  const [button, setButton] = useState(true);
  const [productImg, setProductImg] = useState(null);

  const handleClick = async () => {
    const priceWithoutComma = numberWithoutComma(price.value);
    const data = {
      itemName: productName.value,
      price: priceWithoutComma,
      link: storeLink.value,
      itemImage: productImg,
    };

    try {
      const response = await uploadProduct(data);
      await response.json();
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
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

    if (priceTest > 0 && urlTest && productTest && productImg !== null) {
      setButton(false);
    }
  };

  const handleImage = async (ev) => {
    const { files } = ev.target;
    const image = await imageUpload(files);
    const imageURL = `http://146.56.183.55:5050/${image}`;
    setProductImg(imageURL);
  };

  useEffect(() => {
    isButtonAcitve();
  }, [urlValidation, productName, productImg, price]);

  return (
    <Product
      handleProductImage={handleImage}
      productImg={productImg}
      product={productName}
      price={price}
      storeLink={storeLink}
      handleClick={handleClick}
      setButton={button}
      handleBacktoLink={handleBacktoLink}
      handlePriceKeyPress={handlePriceKeyPress}
      handlePriceBlur={handlePriceBlur}
    />
  );
}
