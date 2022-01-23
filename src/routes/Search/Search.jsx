import React, { useState } from "react";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TabMenu from "../../components/shared/Tab";
import TopSearchNav from "../../components/shared/TopSearchNav";
import SearchList from "../SearchList/SearchList";

export default function Search({ onSearch, users, keywords, setKeywords }) {
  return (
    <>
      <StatusBar />
      <TopSearchNav onSearch={onSearch} keywords={keywords} setKeywords={setKeywords} />
      <SearchContainer>
        <h2 className="ir">계정 검색 결과</h2>
        {users && <SearchList users={users} keywords={keywords} />}
      </SearchContainer>
      <TabMenu />
    </>
  );
}

const SearchContainer = styled.main`
  display: flex;
  justify-content: center;
  height: calc(100% - 108px);
  padding: 20px 16px;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;
