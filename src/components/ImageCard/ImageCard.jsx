import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function ImageCard({ postImage }) {
  const images = postImage.split(",");

  return (
    <Wrapper>
      {images.map((image) => {
        return (
          <li key={uuidv4()}>
            <img src={image} alt="포스트 이미지" className="post-img" />
          </li>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;

  li {
    min-width: 304px;
    width: 100%;
    max-height: 228px;
    min-height: 228px;
    border-radius: 10px;
    border: 0.5px solid #dbdbdb;
    overflow: hidden;
  }

  .post-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageCard;

/*

<li>
        <img src={postImage} alt="포스트 이미지" className="post-img" />
      </li>
      <li>
        <img src="http://146.56.183.55:5050/1642863804845.jpg" alt="포스트 이미지" className="post-img" />
      </li>

      */
