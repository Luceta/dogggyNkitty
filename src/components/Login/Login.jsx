import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../Statusbar/Statusbar";
import FormField from "../FormField/FormField";
import Button from "../shared/Button";

function Login({ isActive, handleClick, email, password, handleDisplay }) {
  return (
    <>
      <StatusBar />
      <Wrapper>
        <h1>로그인</h1>
        <section>
          <h2 className="ir">이메일, 비밀번호 입력 로그인 창</h2>
          <form>
            <FormField labelName="EmailInput" title="이메일" type="email" controller={email} />
            <FormField labelName="passwordInput" title="패스워드" type="password" controller={password} />
            {handleDisplay && <strong className="input-warning-msg">*이메일 또는 비밀번호가 일치하지 않습니다.</strong>}
            <Button type="button" size="lg" onClick={handleClick} disabled={isActive}>
              로그인
            </Button>

            <Link to="/join" className="join">
              이메일로 회원가입
            </Link>
          </form>
        </section>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin: 30px 0;
    text-align: center;
  }
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .join {
    margin-top: 20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #767676;
    text-align: center;
  }
  .input-warning-msg {
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #eb5757;
    margin: -30px 0 30px 0;
  }
`;

export default Login;
