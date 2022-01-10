import React from "react";
import styled from "styled-components";

function Alert({ open, close, header, children, title }) {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <div className="action-box">
        <button type="button" className="cancel">
          취소
        </button>
        <button type="button" className="delete">
          삭제
        </button>
      </div>
    </ModalWrapper>
  );
}

export default Alert;

const ModalWrapper = styled.div`
  width: 252px;
  height: 110px;
  border-radius:10px;
  background:yellowgreen;

  .action-box {
    border-top: 0.5px solid #DBDBDB;

  .cancel {
    width: 126px;
    height: 46px;
    background: #FFFFFF;
    outline: none;
    border:none;
    border: 0.5px solid #DBDBDB;
    font-size: 14px;
    line-height: 18px;
    border-bottom-left-radius:10px;
  }
  .delete {
    width: 126px;
    height: 46px;
    background: #FFFFFF;
    color: #f26e22;
    border:none;
    border-bottom: 0.5px solid #DBDBDB;
    border-top:0.5px solid #DBDBDB;
    border-right:0.5px solid #DBDBDB;
    border-left:none;
    font-size: 14px;
    line-height: 18px;
    border-bottom-right-radius:10px;
  }
`;

const ModalTitle = styled.h3`
  margin: 0;
  margin-bottom: 22px;
  padding: 22px 0 0 61px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
