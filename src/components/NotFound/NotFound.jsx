import React from "react";
import styled from "styled-components";
import Statusbar from "../Statusbar/Statusbar";
import Button from "../shared/Button";

function NotFound({ history }) {
  const handleClick = () => history.push("/");
  return (
    <Container>
      <Statusbar />
      <NotFoundWrapper>
        <h1>
          <img src="/assets/404@2x.png" alt="logo" />
        </h1>
        <p className="txt">페이지를 찾을 수 없습니다. :(</p>
        <Button size="md" color="mainlight" onClick={handleClick}>
          이전 페이지
        </Button>
      </NotFoundWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .txt {
    font-size: 16px;
    line-height: 16px;
    color: #767676;
    margin: 33px 0 33px 0;
  }
`;

export default NotFound;
