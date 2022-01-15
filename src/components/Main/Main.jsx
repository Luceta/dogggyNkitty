import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../Statusbar/Statusbar";
import TabMenu from "../shared/Tab";
import TopMainNav from "../TopMainNav";

function Main(props) {
  return (
    <>
      <StatusBar />
      <TopMainNav>감귤마켓 피드</TopMainNav>
      <HomeMain>
        <h2 className="ir">감귤마켓 피드</h2>
        <div>
          <img src="/assets/symbol-logo-gray@2x.png" alt="logo" />
          <p>유저를 검색해 팔로우 해보세요!</p>
          <StyledLink to="/search">검색하기</StyledLink>
        </div>
      </HomeMain>
      <TabMenu />
    </>
  );
}

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 16px 0;
  width: 100%;
  height: calc(100% - 108px);

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px 0;

    & P {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      font-weight: 400;
      color: #767676;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: default;
  color: #fff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #937456;
  width: 120px;
  height: 44px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 30px;
`;

export default Main;
