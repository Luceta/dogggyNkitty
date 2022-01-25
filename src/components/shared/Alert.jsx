import React from "react";
import styled from "styled-components";

function Alert({ title, actionContent, cancel, handleAction }) {
  return (
    <Container>
      <ModalWrapper>
        <h2 className="ir">경고 메세지</h2>
        <ModalTitle>{title}</ModalTitle>
        <div className="action-box">
          <button type="button" className="cancel" onClick={cancel}>
            취소
          </button>
          <button type="button" className="delete" onClick={handleAction}>
            {actionContent}
          </button>
        </div>
      </ModalWrapper>
    </Container>
  );
}

export default Alert;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalWrapper = styled.div`
  width: 252px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  overflow: hidden;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

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
  background: #fff;
`;
