import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";
import Button from "./Button";

function TopUploadNav({ handleClick, setButton, children }) {
  const history = useHistory();
  const backToPage = () => {
    history.goBack();
  };

  return (
    <HeaderBox>
      <BackToButton type="button" onClick={backToPage}>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
      </BackToButton>
      <Button size="md" color="main" onClick={handleClick} disabled={setButton}>
        {children}
      </Button>
    </HeaderBox>
  );
}

const BackToButton = styled.button`
  border: none;
  background: #fff;
`;

export default TopUploadNav;
