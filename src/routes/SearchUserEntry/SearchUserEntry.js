import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SearchUserEntry({ user, keywords }) {
  const highLight = (username, keyword) => {
    const hStyle = "key-word";
    const styCopy = username;
    return styCopy.replace(keyword, (match) => `<span class=${hStyle}>${match}</span>`);
  };

  return (
    <UserCard>
      <Link to="/#userinfolink" className="user-info-link">
        <img src={user.image} alt="user-avatar" className="user-avatar" />
        <div className="user-info">
          <strong className="user-name" dangerouslySetInnerHTML={{ __html: highLight(user.username, keywords) }} />
          <strong className="user-account-name">{user.accountname}</strong>
        </div>
      </Link>
    </UserCard>
  );
}

const UserCard = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  .user-info-link {
    // position:relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    font-size: 10px;
  }

  .user-info {
    margin-left: 12px;
    align-self: flex-start;
  }

  .user-name {
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    color: black;
  }

  .user-account-name {
    color: #767676;
    font-size: 12px;
    line-height: 15px;
  }

  .user-accountname::before {
    content: "@";
    margin-right: 3px;
  }

  .key-word {
    color: #c98128;
  }
`;
