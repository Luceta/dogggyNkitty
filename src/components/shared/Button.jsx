import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-width: 56px;
    --button-radius: 26px;
    --button-padding: 7px 0px;
    --button-font-size: 12px;
    --button-font-weight: 400;
    --button-line-height: 14px;
  `,
  md: css`
    --button-width: 120px;
    --button-radius: 30px;
    --button-padding: 8px 0px;
    --button-font-size: 14px;
    --button-font-weight: 500;
    --button-bg-color: #c98128;
  `,
  lg: css`
    --button-width: 322px;
    --button-radius: 44px;
    --button-padding: 13px 0px;
    --button-font-size: 14px;
    --button-font-weight: 500;
  `,
};

const COLORS = {
  light: css`
    --button-color: #767676;
    --button-bg-color: #dfe0df;
    --button-hover-bg-color: #e0a800;
  `,
  mainLight: css`
    --button-color: #ffffff;
    --button-bg-color: #c98128;
    --button-hover-bg-color: #937456;
  `,
  main: css`
    --button-color: #ffffff;
    --button-bg-color: #937456;
    --button-hover-bg-color: #e0a800;
  `,
};

function Button({ disabled, size, color, children, margin }) {
  const sizeStyle = SIZES[size];
  const variantStyle = COLORS[color];
  return (
    <StyledButton disabled={disabled} sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(props) => props.sizeStyle}
  ${(props) => props.variantStyle}

  border: none;
  cursor: pointer;
  width: var(--button-width, 1rem);
  font-family: "Spoqa Han Sans";
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight, 500);
  line-height: var(--button-line-height, 18px);
  padding: var(--button-padding, 13px 0px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #937456);

  &:active {
    color: #ffff;
    background: var(--button-hover-bg-color, #dfe0df);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #c98128);
    width: var(--button-width, 400px);
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
  }
`;

export default Button;
