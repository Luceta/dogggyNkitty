import React from "react";
import styled from "styled-components";

function Alert({ open, close, header, children }) {
  return <styledModal>{children}</styledModal>;
}

export default Alert;

const styledModal = styled.div`
  width: 252px;
  height: 110px;
`;
