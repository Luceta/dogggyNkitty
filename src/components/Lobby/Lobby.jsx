import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../Statusbar/Statusbar";

function Lobby() {
  return (
    <>
      <StatusBar />
      <LoginMain>
        <h1>
          <img className="logo-gray" src="/assets/symbol-logo-gray@2x.png" alt="Logo" />
        </h1>

        <LoginContainer>
          <li className="link-sns-login icon-kakao">
            <a href="#kakao">카카오톡 계정으로 로그인</a>
          </li>
          <li className="link-sns-login icon-goggle">
            <a href="#google">구글 계정으로 로그인</a>
          </li>
          <li className="link-sns-login icon-facebook">
            <a href="/#facebok">페이스북 계정으로 로그인</a>
          </li>
          <li className="local-login">
            <button type="button">이메일로 로그인</button>
            <Link to="/join" className="join">
              회원가입
            </Link>
          </li>
        </LoginContainer>
      </LoginMain>
    </>
  );
}

const LoginMain = styled.main`
  position: relative;
  height: 100%;
  background-color: #937456;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;

  .logo-gray {
    width: 144px;
    height: 144px;
  }
`;

const LoginContainer = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 34px 0 34px;

  .link-sns-login {
    position: relative;
    display: block;
    width: 322px;
    height: 44px;
    padding: 13px 0;
    margin-bottom: 10px;
    border-radius: 44px;
    color: #767676;
    font-weight: 400;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
  }

  .local-login {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 15px;

    & button {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #767676;
      border: none;
      cursor: pointer;
      background-color: #fff;
    }

    & .join {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #767676;
    }
  }
  .local-login .join::before {
    content: "|";
    margin: 0px 12px;
    color: #767676;
  }

  .link-sns-login::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    content: "";
    margin-left: 17px;
    width: 24px;
    height: 24px;
    background-image: url("/assets/message-circle.png");
  }

  .link-sns-login.icon-kakao {
    border: 1px solid #f2c94c;
  }

  .link-sns-login.icon-goggle {
    border: 1px solid #767676;
  }

  .link-sns-login.icon-goggle::before {
    background-image: url("/assets/google.png");
  }

  .link-sns-login.icon-facebook {
    border: 1px solid #2d9cdb;
  }

  .link-sns-login.icon-facebook::before {
    background-image: url("/assets/facebook.png");
  }
`;

export default Lobby;
