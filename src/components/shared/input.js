import styled from "styled-components";

export default styled.input`
  width: 80%;
  margin-right: 19px;
  padding: 7px 0 7px 16px;
  background: #f2f2f2;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 32px;
  border: 1px solid #ededed;

  &::placeholder {
    color: #c4c4c4;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #414141;
  }
`;
