import React from "react";
import Button from "../components/shared/Button";
import Alert from "../components/shared/Alert";
import Tab from "../components/shared/Tab";

function App() {
  return (
    <>
      <h1>modal</h1>
      <h2>tab-menu-footer</h2>
      <Tab>tab</Tab>
      <h2>Alert modal</h2>
      <Alert title="상품을 삭제할까요?" actionContent="삭제">
        modal
      </Alert>
      <h2>button</h2>
      <Button size="sm">기본</Button>
      <Button size="md">테스트 2</Button>
      <Button size="lg">테스트 2</Button>
    </>
  );
}

export default App;
