/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import TopUploadNav from "../../components/shared/TopUploadNav";
import FormField from "../../components/FormField/FormField";

function Product({
  handleProductImage,
  product,
  productImg,
  price,
  storeLink,
  handleClick,
  setButton,
  handlePriceKeyPress,
  handlePriceBlur,
  handleBacktoLink,
}) {
  return (
    <>
      <TopUploadNav handleClick={handleClick} setButton={setButton} handleButton={handleBacktoLink} />
      <ProductRegister>
        <h1 className="ir">상품등록 페이지</h1>
        <RegisterForm>
          <h2 className="ir">상품 정보 입력창</h2>
          <form>
            <ProductImgRegister>
              <h3>이미지 등록</h3>
              <label htmlFor="productImg" className="product-img-label">
                {productImg && <img src={productImg} alt="" />}
                <input
                  type="file"
                  id="productImg"
                  name="product-img"
                  accept="image/*"
                  className="ir"
                  onChange={handleProductImage}
                />
              </label>
            </ProductImgRegister>

            <FormField
              type="text"
              title="상품명"
              placeholder="2~10자 이내여야 합니다."
              labelName="productName"
              controller={product}
            />
            <FormField
              type="text"
              title="가격"
              placeholder="숫자만 입력 가능합니다."
              labelName="price"
              controller={price}
              handleKeyPress={handlePriceKeyPress}
              onBlur={handlePriceBlur}
            />
            <FormField
              type="url"
              title="판매링크"
              placeholder="URL을 입력해 주세요."
              labelName="storeLink"
              controller={storeLink}
            />
          </form>
        </RegisterForm>
      </ProductRegister>
    </>
  );
}

const ProductRegister = styled.main`
  display: flex;
  justify-content: center;

  .ir {
    position: absolute;
    top: auto;
    left: -100000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const RegisterForm = styled.section`
  width: 100%;
  max-width: 390px;
  padding: 30px 34px 0;

  .ir {
    position: absolute;
    top: auto;
    left: -100000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const ProductImgRegister = styled.div`
  margin-bottom: 30px;

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 18px;
  }

  .product-img-label {
    position: relative;
    display: block;
    width: 100%;
    height: 204px;
    background-color: #f2f2f2;
    border: 0.5px solid #dbdbdb;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  .product-img-label::after {
    position: absolute;
    right: 12px;
    bottom: 12px;
    content: "";
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: url("/assets/img-button.png");
  }
`;

export default Product;
