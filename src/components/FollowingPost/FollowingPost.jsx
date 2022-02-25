import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FollowingPost({ feed }) {
  const { username, accountname, image } = feed.author;

  return (
    <Post>
      <h3 className="ir">포스트 아이템</h3>
      <PostAuthor>
        <h4 className="ir">유저</h4>
        <img src={image} alt="유저 프로필 사진" className="post-author-profile-img" />
        <div className="post-auth-info">
          <strong className="post-username">{username}</strong>
          <strong className="post-account-name">{accountname}</strong>
        </div>
      </PostAuthor>

      <PostContainer>
        <h4 className="ir">포스트 내용</h4>
        <PostImgContainer>
          <ul className="post-img-list">
            <li>
              <img src={feed.image} alt="포스트 이미지" className="post-img" />
            </li>
          </ul>
        </PostImgContainer>

        <CommentContainer>
          <button type="button" className="like">
            <span className="ir">좋아요 숫자</span>
            <span className="like-count">{feed.heartCount}</span>
          </button>
          <Link to="/#" className="comment">
            <span className="ir">댓글 남기기</span>
            <span className="comment-count">{feed.commentCount}</span>
          </Link>
        </CommentContainer>
        <strong className="post-date">2022년 2월 20일</strong>
      </PostContainer>

      <PostMoreButton type="button">
        <span className="ir">더보기 버튼</span>
      </PostMoreButton>
    </Post>
  );
}

const Post = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-bottom: 20px;
`;

const PostAuthor = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;

  .post-auth-info {
    display: flex;
    flex-direction: column;
  }

  .post-username {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 2px;
  }

  .post-account-name {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  .post-account-name::before {
    content: "@";
    margin-right: 3px;
    color: #767676;
  }

  .post-author-profile-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 12px;
  }
`;

const PostContainer = styled.section`
  padding-left: 54px;

  .post-date {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
  }
`;

const PostImgContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;

  .post-img-list {
    display: flex;
    transition: all 0.4s;
  }

  li {
    min-width: 304px;
    width: 100%;
    max-height: 228px;
    min-height: 228px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;

  .like {
    display: flex;
    align-items: center;
    margin-right: 18px;
    background-color: inherit;
    width: inherit;
    padding: 0;
    color: #767676;
  }

  .like::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url("/assets/icon/icon-heart.png") no-repeat center / 20px 20px;
    margin-right: 10px;
  }

  .comment {
    display: flex;
    align-items: center;
  }

  .comment::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url("/assets/icon/icon-message-circle.png") no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;

const PostMoreButton = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  width: 18px;
  height: 18px;
  background-color: inherit;
  background: url("/assets/icon/icon-more-vertical.png") no-repeat center / 18px 18px;
`;
