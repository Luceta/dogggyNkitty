import React from "react";
import styled from "styled-components";

function PostImageCard({ image }) {
  return (
    <Card>
      <img src={image} alt="user-post" />
      <button type="button" className="img-remove">
        {" "}
      </button>
    </Card>
  );
}

const Card = styled.li`
  width: 168px;
  height: 126px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-remove {
    position: absolute;
    top: 6px;
    right: 6px;
    height: 22px;
    width: 22px;
    background: url("/assets/icon/icon-delete.svg") no-repeat center;
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }
`;

export default PostImageCard;
