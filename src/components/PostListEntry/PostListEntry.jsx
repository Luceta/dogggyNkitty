import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageCard from "../ImageCard/ImageCard";

function PostListEntry({ post }) {
  const { accountname, username } = post.author;
  const postDate = new Date(post.createdAt).toLocaleDateString();
  const postImage = post.image;

  return (
    <Wrapper>
      <h3 className="ir">유저 포스트</h3>
      <PostInfo>
        <h4 className="ir">유저</h4>
        <img
          src="http://146.56.183.55:5050/1642843641728.gif"
          alt="유저 프로필 사진"
          className="post-author-profile-img"
        />
        <div className="post-auth-info">
          <strong className="post-username">{username}</strong>
          <strong className="post-account-name">{accountname}</strong>
        </div>
      </PostInfo>

      <PostContainer>
        <h4 className="ir">유저 게시글 내용</h4>
        <p className="post-text">{post.content}</p>
        <div className="post-img-wrapper">{postImage ? <ImageCard postImage={postImage} /> : ""}</div>

        <div className="like-comment-wrapper">
          <button type="button" className="like">
            <span className="ir">좋아요 숫자</span>
            <span className="like-count">{post.heartCount}</span>
          </button>
          <Link to="/#" className="comment">
            <span className="ir">댓글 남기기</span>
            <span className="comment-count">{post.commentCount}</span>
          </Link>
        </div>
        <strong className="post-date">{postDate}</strong>
        <button type="button" className="post-controller">
          <span className="ir">더보기 버튼</span>
        </button>
      </PostContainer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  position: relative;
  margin-bottom: 20px;
  max-width: 358px;
  width: 100%;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const PostInfo = styled.section`
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
  .post-img-wrapper {
    position: relative;
    margin-bottom: 16px;
    max-height: 228px;
    border-radius: 10px;
    overflow: hidden;
  }

  .post-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .like-comment-wrapper {
    display: flex;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 16px;
  }

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

  .post-date {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
  }

  .post-controller {
    position: absolute;
    top: 4px;
    right: 0;
    width: 18px;
    height: 18px;
    background: url("/assets/icon/icon-more-vertical.png") no-repeat center / 18px 18px;
  }
`;

export default PostListEntry;
