import React from "react";
import styled from "styled-components";

function Alert({ title, actionContent }) {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <div className="action-box">
        <button type="button" className="cancel">
          취소
        </button>
        <button type="button" className="delete">
          {actionContent}
        </button>
      </div>
    </ModalWrapper>
  );
}

export default Alert;

const ModalWrapper = styled.div`
  width: 252px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  overflow: hidden;

  .action-box {
    display: flex;
    border-top: 0.5px solid #dbdbdb;
  }
  .cancel {
    flex: 1;
    height: 46px;
    background: #ffffff;
    outline: none;
    border: none;
    border-right: 0.5px solid #dbdbdb;
    font-size: 14px;
    line-height: 18px;
  }
  .delete {
    flex: 1;
    height: 46px;
    border: none;
    background: #ffffff;
    color: #f26e22;
    font-size: 14px;
    line-height: 18px;
  }
`;

const ModalTitle = styled.h3`
  margin: 0;
  padding: 22px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
