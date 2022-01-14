import React from "react";
import styled from "styled-components";
import FormField from "../FormField/FormField";
import StatusBar from "../Statusbar/Statusbar";
import Button from "../shared/Button";
import useInput from "../hooks/useInput";

function Signup(props) {
  const email = useInput("");
  const password = useInput("");
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
            <FormField
              labelName="passwordInput"
              title="패스워드"
              type="password"
              controller={password}
              placeholder="비밀번호를 설정해 주세요."
            />
            <Button size="lg">다음</Button>
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
`;

export default Signup;
