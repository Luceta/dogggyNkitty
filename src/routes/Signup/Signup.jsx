import React from "react";
import styled from "styled-components";
import FormField from "../../components/FormField/FormField";
import StatusBar from "../../components/Statusbar/Statusbar";
import Button from "../../components/shared/Button";

function Signup({ email, password, handleClick }) {
  return (
    <>
      <StatusBar />
      <Wrapper>
        <h1>이메일로 회원가입</h1>
        <div>
          <form>
            <FormField
              labelName="EmailInput"
              title="이메일"
              type="email"
              placeholder="이메일 주소를 알려주세요."
              controller={email}
            />
            <strong className="input-warning-msg">올바르지 않은 이메일 형식입니다.</strong>
            <FormField
              labelName="passwordInput"
              title="패스워드"
              type="password"
              placeholder="비밀번호를 설정해 주세요."
              controller={password}
            />
            <strong className="input-warning-msg password">비밀번호는 6자리 이상이어야 합니다.</strong>
            <Button size="lg" margin="30" onClick={handleClick}>
              다음
            </Button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin: 30px 0;
  }

  .input-warning-msg {
    display: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgb(235, 87, 87);
    margin-top: 6px;
  }

  .input-warning-msg.password {
    margin-bottom: 30px;
  }
`;

export default Signup;
