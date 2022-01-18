import React from "react";
import styled from "styled-components";
import FormField from "../../components/FormField/FormField";
import StatusBar from "../../components/Statusbar/Statusbar";
import Button from "../../components/shared/Button";
import SignupProfile from "../SignupProfile/SignupProfile";

function Signup({
  email,
  password,
  username,
  accountname,
  intro,
  avatar,
  handleAvatar,
  handleNextClick,
  handleJoin,
  handleDisplay,
  handleEmailBlur,
  handlePasswordBlur,
  handleUsernameBlur,
  handleAccountnameBlur,
  emailWarning,
  emailValid,
  usernameWarning,
  passwordWarning,
  accoutnameWarning,
  handleButton,
}) {
  return (
    <>
      <StatusBar />
      <form>
        {!handleDisplay && (
          <Wrapper>
            <h2>이메일로 회원가입</h2>
            <div>
              <FormField
                labelName="EmailInput"
                title="이메일"
                type="email"
                placeholder="이메일 주소를 알려주세요."
                controller={email}
                onBlur={handleEmailBlur}
              />
              {emailValid ? (
                <strong className={emailWarning ? "input-warning-msg id" : "input-warning-msg"}>
                  {`
                    *이미 가입된 이메일 주소입니다.
                  `}
                </strong>
              ) : (
                <strong className={emailWarning ? "input-warning-msg id" : "input-warning-msg"}>
                  {`
                  * 올바르지 않은 이메일 형식입니다.
                    `}
                </strong>
              )}

              <FormField
                labelName="passwordInput"
                title="패스워드"
                type="password"
                placeholder="비밀번호를 설정해 주세요."
                controller={password}
                onBlur={handlePasswordBlur}
              />
              <strong className={passwordWarning ? "input-warning-msg password" : "input-warning-msg"}>
                비밀번호는 6자리 이상이어야 합니다.
              </strong>
              <Button disabled={handleButton} size="lg" onClick={handleNextClick}>
                다음
              </Button>
            </div>
          </Wrapper>
        )}

        {handleDisplay && (
          <SignupProfile
            username={username}
            accountname={accountname}
            intro={intro}
            avatar={avatar}
            handleAvatar={handleAvatar}
            handleClick={handleJoin}
            handleUsernameBlur={handleUsernameBlur}
            handleAccountnameBlur={handleAccountnameBlur}
            usernameWarning={usernameWarning}
            accoutnameWarning={accoutnameWarning}
            handleButton={handleButton}
          />
        )}
      </form>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 500;
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
    margin: -9px 0 20px 0;
  }

  .input-warning-msg.id {
    display: block;
    margin-top: -16px;
    border-top: 1px solid #eb5757;
  }

  .input-warning-msg.password {
    display: block;
    border-top: 1px solid #eb5757;
    margin: -46px 0 30px 0;
  }
`;

export default Signup;
