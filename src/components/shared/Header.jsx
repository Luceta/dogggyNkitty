import React from "react";
import styled from "styled-components";

function HeaderBasic({ leftLogo, rightLogo }) {
  console.log(leftLogo, "check logo");
  return (
    <StyledHeader>
      {leftLogo && (
        <div>
          <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
        </div>
      )}

      {rightLogo && (
        <div>
          <img src="/assets/icon/icon-more-vertical.png" alt="back to home icon" />
        </div>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px;
`;

export default HeaderBasic;
