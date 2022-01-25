import React from "react";
import styled from "styled-components";
import PostListEntry from "../PostListEntry/PostListEntry";

function PostList({ posts }) {
  return (
    <Container>
      {posts.map((post) => {
        return <PostListEntry key={post.id} post={post} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 16px 16px 70px;
`;

export default PostList;
