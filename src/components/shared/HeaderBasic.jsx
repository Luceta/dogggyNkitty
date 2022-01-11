import React from "react";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";

function HeaderBasic(props) {
  const { children } = props;
  return (
    <HeaderBox>
      <LeftNav>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
        <h2>{children}</h2>
      </LeftNav>

      <div>
        <img src="/assets/icon/icon-more-vertical.png" alt="back to home icon" />
      </div>
    </HeaderBox>
  );
}

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default HeaderBasic;
