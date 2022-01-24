import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import PostImageCard from "../PostImageCard/PostImageCard";

function PostImageList({ images }) {
  return (
    <PostImageWrapper>
      <h4 className="ir">추가된 사진</h4>
      <ul className="image-list">
        {images.map((image) => {
          return <PostImageCard key={uuidv4()} image={image} />;
        })}
      </ul>
    </PostImageWrapper>
  );
}

const PostImageWrapper = styled.section`
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .image-list {
    display: flex;
    gap: 8px;
    overflow-x: scroll;
  }
`;

export default PostImageList;
