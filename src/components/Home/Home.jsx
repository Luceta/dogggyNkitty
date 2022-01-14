import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lobby from "../Lobby/Lobby";
import Splash from "../Splash/Splash";
import Login from "../Login/Login";
import useInput from "../hooks/useInput";
import { loginAPI } from "../../api/api";

function Home(props) {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [warning, setWarning] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const email = useInput("");
  const password = useInput("");

  const loginButtonActive = () => {
    const emailInputLength = email.value.split("").length;
    const passwordInputLength = password.value.split("").length;

    if (emailInputLength > 1 && passwordInputLength > 1) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    loginButtonActive();
  }, [email, password]);

  const handleClick = async (ev) => {
    ev.preventDefault();
    const loginResponse = await (await loginAPI(email.value, password.value)).json();

    if (loginResponse.status === 422) {
      setWarning(true);
    } else {
      // TODO: 토큰을 저장하고 redux로 관리 해줌.
    }
  };

  return (
    <HomeContainer>
      <article>
        <div className="display-app">
          <PhoneWrapper>
            <div className="container">
              <Splash />
            </div>
          </PhoneWrapper>
        </div>
        <div className="login-wrapper">
          {loginDisplay ? (
            <Login
              email={email}
              password={password}
              handleClick={handleClick}
              handleDisplay={warning}
              isActive={isActive}
            />
          ) : (
            <Lobby display={setLoginDisplay} />
          )}
        </div>
      </article>
    </HomeContainer>
  );
}

const PhoneWrapper = styled.div`
  width: 450px;
  height: 900px;
  background-image: url("/assets/iphone.png");
  background-size: contain;
  background-repeat: no-repeat;

  .container {
    width: 339.5px;
    height: 595px;
    background-color: #937456;
    margin: 116px 55px;
  }
`;

const HomeContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    display: flex;
  }

  .display-app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .login-wrapper {
    width: 450px;
    height: 900px;
    margin: 0 20px;
  }
`;

export default Home;
