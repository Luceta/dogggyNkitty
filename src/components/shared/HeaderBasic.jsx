import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";

function HeaderBasic({ children, handleClick }) {
  return (
    <HeaderBox>
      <LeftNav>
        <Link to="/">
          <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
          <h2>{children}</h2>
        </Link>
      </LeftNav>

      <button type="button" onClick={handleClick}>
        <img src="/assets/icon/icon-more-vertical.png" alt="show options" />
      </button>
    </HeaderBox>
  );
}

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default HeaderBasic;
