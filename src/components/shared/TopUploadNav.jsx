import React from "react";
import HeaderBox from "./HeaderBox";
import Button from "./Button";

function TopUploadNav(props) {
  return (
    <HeaderBox>
      <div>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
      </div>
      <Button size="md" color="mainLight">
        저장
      </Button>
    </HeaderBox>
  );
}

export default TopUploadNav;
