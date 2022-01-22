import React from "react";
import styled from "styled-components";
import Lobby from "../../components/Lobby/Lobby";
import Login from "../../components/Login/Login";
import StatusBar from "../../components/Statusbar/Statusbar";

function Home({ email, password, handleClick, handleDisplay, loginDisplay, isActive, setLoginDisplay }) {
  return (
    <HomeContainer>
      <article>
        <div className="display-app">
          <PhoneWrapper>
            <div className="container">
              <StatusBar />
              <div className="logo-wrapper">
                <img src="/assets/full-logo-gray@2x.png" alt="" />
              </div>
            </div>
          </PhoneWrapper>
        </div>
        <div className="login-wrapper">
          {loginDisplay ? (
            <Login
              email={email}
              password={password}
              handleClick={handleClick}
              handleDisplay={handleDisplay}
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

  .logo-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 144px;
      height: 144px;
    }
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
