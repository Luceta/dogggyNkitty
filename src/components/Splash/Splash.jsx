import React from "react";
import styled from "styled-components";
import Statusbar from "../Statusbar/Statusbar";

function Splash(props) {
  return (
    <>
      <Statusbar />
      <SplashContainer>
        <h1>
          <img src="/assets/full-logo2x.png" alt="logo" />
        </h1>
      </SplashContainer>
    </>
  );
}

const SplashContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Splash;
