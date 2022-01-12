import React from "react";
import styled from "styled-components";
import Login from "../Login/Login";
import Splash from "../Splash/Splash";

function Home(props) {
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
          <Login />
        </div>
      </article>
    </HomeContainer>
  );
}

const PhoneWrapper = styled.div`
  width: 390px;
  height: 600px;
  background-image: url("/assets/iphone.png");
  background-size: contain;
  background-repeat: no-repeat;

  .container {
    width: 234px;
    height: 410px;
    background-color: #937456;
    margin: 80px 0 0 38px;
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
    width: 390px;
    height: 600px;
    margin: 0 20px;
  }
`;

export default Home;
