import React from "react";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TabMenu from "../../components/shared/Tab";
import TopMainNav from "../../components/shared/TopMainNav";
import FollowingPost from "../../components/FollowingPost/FollowingPost";

export default function Main({ following }) {
  return (
    <>
      <StatusBar />
      <TopMainNav>감귤마켓 </TopMainNav>
      <HomeMain>
        <h2 className="ir">감귤마켓 피드</h2>
        <article>
          {following.map((feed) => {
            const { _id: id } = feed;
            return <FollowingPost key={feed.id} feed={feed} />;
          })}
        </article>
      </HomeMain>
      <TabMenu />
    </>
  );
}

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  padding: 20px 16px 0;
  height: calc(100% - 108px);
  overflow-y: scroll;
  min-width: 100%;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;
