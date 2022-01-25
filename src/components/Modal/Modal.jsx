import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Modal({ open, close, logout }) {
  return (
    <Container onClick={close}>
      <div className={open ? "openModal modal" : "modal"}>
        {open && (
          <Options>
            <li>
              <StyledLink to="/profile">설정 및 개인 정보</StyledLink>
            </li>
            <li>
              <button type="button" onClick={logout} id="logout-alert">
                로그아웃
              </button>
            </li>
          </Options>
        )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    animation: modal-bg-show 0.3s;
  }

  .modal.openModal {
    display: block;
    animation: modal-bg-show 0.3s;
  }

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Options = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 36px 0 16px;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  animation: modal-show 0.4s ease-out;

  &::before {
    position: absolute;
    content: "";
    top: 16px;
    left: 50%;
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    border-radius: 5px;
  }

  li {
    display: flex;
    align-items: center;
    padding-left: 26px;

    button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 46px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      bottom: -150px;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 46px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000;
`;

export default Modal;
