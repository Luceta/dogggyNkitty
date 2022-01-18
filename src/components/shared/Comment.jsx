import React from "react";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";

function Comment() {
  return (
    <HeaderBox>
      <AvatarWrapper>
        <img className="avatar" src="/assets/profile.svg" alt="logo" />
        <input className="comment" type="text" placeholder="댓글 입력하기" />
      </AvatarWrapper>

      <UploadWrapper>
        <span className="upload">게시</span>
      </UploadWrapper>
    </HeaderBox>
  );
}

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    width: 36px;
    height: 36px;
    margin-right: 18px;
  }

  .comment {
    border: none;
    outline: none;
    color: #c4c4c4;
    font-size: 14px;
    line-height: 18px;
  }
`;

const UploadWrapper = styled.div`
  .upload {
    font-size: 14px;
    line-height: 18px;
    color: #b9a89a;
  }
`;

export default Comment;
