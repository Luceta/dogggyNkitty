import React from "react";
import styled from "styled-components";

function FormField(props) {
  const {
    title,
    type,
    placeholder,
    labelName,
    controller: { value, onChange },
    onKeyPress,
  } = props;
  return (
    <Wrapper>
      {title && <legend>{title}</legend>}
      <label htmlFor={labelName}>
        <input
          id={labelName}
          name={title}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="on"
          onKeyPress={onKeyPress}
        />
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.fieldset`
  font-size: 16px;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 46px;
  }

  & legend {
    font-size: 12px;
    color: #767676;
    line-height: 15px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }
`;

export default FormField;
