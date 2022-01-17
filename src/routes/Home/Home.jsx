import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Lobby from "../../components/Lobby/Lobby";
import Splash from "../../components/Splash/Splash";
import Login from "../../components/Login/Login";
import useInput from "../../components/hooks/useInput";
import getToken from "../../thunks";

function Home({ login, loginStatus }) {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const email = useInput("");
  const password = useInput("");
  const [warning, setWarning] = useState(false);

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

  const handleClick = (ev) => {
    ev.preventDefault();
    login(email.value, password.value);
    if (!loginStatus) {
      setWarning(true);
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

const mapStateToProps = (state) => {
  return {
    loginStatus: state.ui.lobby.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(getToken(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
