import React from "react";
import styled from "styled-components";
import Statusbar from "../Statusbar/Statusbar";

function Splash() {
  return (
    <Container>
      <Statusbar />
      <SplahWrapper>
        <h1>
          <img src="/assets/full-logo2x.png" alt="logo" />
        </h1>
      </SplahWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  animation: hideSplashScreen 1s ease-in-out forwards;

  @keyframes hideSplashScreen {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const SplahWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Splash;
