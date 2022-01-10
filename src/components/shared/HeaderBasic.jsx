import React from "react";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";

function HeaderBasic(props) {
  return (
    <HeaderBox>
      <div>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
      </div>

      <div>
        <img src="/assets/icon/icon-more-vertical.png" alt="back to home icon" />
      </div>
    </HeaderBox>
  );
}

export default HeaderBasic;
