import React from "react";
import styled from "styled-components";
import ProductListEntry from "../ProductListEntry/ProductListEntry";

const Container = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
`;

export default function ProductList({ products, openProductModal }) {
  return (
    <Container>
      {products.map((product) => {
        return <ProductListEntry handleCLick={openProductModal} key={product.id} product={product} />;
      })}
    </Container>
  );
}
