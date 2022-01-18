import React from "react";
import Button from "./Button";
import Alert from "./Alert";
import TabMenu from "./Tab";
import HeaderBasic from "./HeaderBasic";
import TopMainNav from "./TopMainNav";
import TopUploadNav from "./TopUploadNav";
import TopSearchNav from "./TopSearchNav";
import Comment from "./Comment";

function Module() {
  return (
    <>
      <h1>modal</h1>
      <h2>top-nav</h2>
      <HeaderBasic leftLogo rightLogo />
      <TopSearchNav leftLogo />
      <TopUploadNav />
      <HeaderBasic leftLogo rightLogo>
        애월읍 위니브 감귤농장
      </HeaderBasic>
      <TopMainNav>감귤 마켓 피드</TopMainNav>
      <Comment />

      <h2>tab-menu-footer</h2>
      <TabMenu />
      <h2>Alert modal</h2>
      <Alert title="상품을 삭제할까요?" actionContent="삭제">
        modal
      </Alert>
      <h2>button</h2>
      <Button size="sm">기본</Button>
      <Button size="md">테스트 1</Button>
      <Button size="lg">테스트 2</Button>
      <Button size="lg">테스트 3</Button>
      <Button size="lg" disabled={!false}>
        테스트 4
      </Button>
    </>
  );
}

export default Module;
