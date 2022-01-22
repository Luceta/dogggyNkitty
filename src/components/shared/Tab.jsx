import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TabMenu() {
  return (
    <TabNabContainer>
      <TabNavList>
        <Nav>
          <Link to="/" className="nav_link">
            <img src="/assets/icon/icon-home.png" alt="home icon" />
            <span>홈</span>
          </Link>
        </Nav>

        <Nav>
          <Link to="/chat" className="nav_link">
            <img src="/assets/icon/icon-message-circle.svg" alt="chat icon" />
            <span>채팅</span>
          </Link>
        </Nav>

        <Nav>
          <Link to="/edit" className="nav_link">
            <img src="/assets/icon/icon-edit.png" alt="upload icon" />
            <span>게시물 작성</span>
          </Link>
        </Nav>

        <Nav>
          <Link to="/profile" className="nav_link">
            <img src="/assets/icon/icon-user.png" alt="profile icon" />
            <span>프로필</span>
          </Link>
        </Nav>
      </TabNavList>
    </TabNabContainer>
  );
}

const TabNabContainer = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 390px;
  box-sizing: border-box;
  padding: 14px 33px;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
  background: #fff;
`;

const TabNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Nav = styled.li`
  .nav_link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 84px;
  }

  .nav_link > img {
    display: block;
    width: 24px;
    height: 24px;
  }

  .nav_link > span {
    display: block;
    font-size: 10px;
    text-align: center;
    padding: 6px 0;
  }
`;

export default TabMenu;

// TODO: click change color nav menu
// <img src="/assets/icon/icon-home-fill@brown.png" alt="home icon" />;
// <img src="/assets/icon/icon-message-circle-fill@brown.png" alt="chat icon">
// <img src="/assets/icon/icon-profile.png" alt="profile icon">
