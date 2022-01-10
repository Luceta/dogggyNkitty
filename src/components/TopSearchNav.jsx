import React from "react";
import styled from "styled-components";
import HeaderBox from "./shared/HeaderBox";
import SearchInput from "./SearchInput";

function TopSearchNav(props) {
  return (
    <HeaderBox>
      <div>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
      </div>

      <SearchInput placeholder="계정 검색" />
    </HeaderBox>
  );
}

export default TopSearchNav;
