import React from "react";
import styled from "styled-components";

export default function ProductListEntry({ product }) {
  return (
    <Product>
      <figure className="product">
        <img src="http://146.56.183.55:5050/1642843641728.gif" alt="user-product" className="product-image" />
        <figcaption className="product-info">
          <strong className="product-name">야너두?</strong>
          <strong className="product-price">1,234 원</strong>
        </figcaption>
      </figure>
    </Product>
  );
}

const Product = styled.li`
  cursor: pointer;

  .product {
    min-width: 140px;
  }

  .product-image {
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  .product-info {
    padding: 6px 2px 0;
  }

  .product-name {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
  }

  .product-price {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }
`;
