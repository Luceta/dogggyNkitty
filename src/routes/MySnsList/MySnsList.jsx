/* eslint-disable no-param-reassign */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeaderBox from "../../components/shared/HeaderBox";

export default function MySnsList({ title, userList, handleFollow }) {
  return (
    <>
      <header>
        <HeaderBox>
          <LeftNav>
            <NavLink type="button" to="/profile">
              <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
              <h2>{title}</h2>
            </NavLink>
          </LeftNav>
        </HeaderBox>
      </header>

      <StyledMain>
        <ul>
          {userList?.map((user) => {
            const userLink = `/profile/${user.accountname}`;
            const { _id: id } = user;
            return (
              <li key={id}>
                <ProfileLink to={userLink}>
                  <img src={user.image} alt={`${user.username}님의 프로필사진`} />
                </ProfileLink>
                <UserInfo>
                  <Link to={userLink}>
                    <strong className="username">{user.username}</strong>
                    <strong className="user-intro">{user.intro}</strong>
                  </Link>
                </UserInfo>

                {user.isfollow ? (
                  <button type="button" onClick={(ev) => handleFollow(ev, user)}>
                    취소
                  </button>
                ) : (
                  <button type="button" className="follow-button" onClick={(ev) => handleFollow(ev, user)}>
                    팔로우
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </StyledMain>
    </>
  );
}

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 14px;

    line-height: 18px;
    margin-left: 8px;
  }
`;

const StyledMain = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;

  ul {
    margin: 0 auto;
    max-width: 390px;
    padding: 24px 16px;
  }

  li {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }

  li > button {
    width: 70px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 26px;
    cursor: pointer;
    color: #767676;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  .follow-button {
    background-color: #937456;
    color: #fff;
  }
`;

const ProfileLink = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  font-size: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  margin-left: 12px;
  width: calc(100% - 17px);
  height: 100%;
  align-self: flex-start;

  .username {
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }

  .user-intro {
    color: #767676;
    font-size: 12px;
    line-height: 15px;
  }
`;
