import React from "react";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";
import Button from "./Button";

function TopUploadNav({ handleClick, setButton, handleButton }) {
  return (
    <HeaderBox>
      <BackToButton type="button" onClick={handleButton}>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
      </BackToButton>
      <Button size="md" color="main" onClick={handleClick} disabled={setButton}>
        저장
      </Button>
    </HeaderBox>
  );
}

const BackToButton = styled.button`
  border: none;
  background: #fff;
`;

export default TopUploadNav;
