import React from "react";
import styled from "styled-components";

import HeaderBox from "./shared/HeaderBox";

function TopMainNav({ children }) {
  return (
    <HeaderBox>
      <TopSearchTitle>{children}</TopSearchTitle>
      <SearchBox>
        <img src="/assets/icon/icon-search.png" alt="search logo" />
      </SearchBox>
    </HeaderBox>
  );
}

const TopSearchTitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  padding: 13px 0;
`;

const SearchBox = styled.div`
  padding: 16px 0px;
`;

export default TopMainNav;
