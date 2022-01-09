import React from "react";
import Button from "../components/shared/Button";
import Alert from "../components/shared/Alert";

function App() {
  return (
    <>
      <h1>Alert modal</h1>
      <Alert>modal</Alert>
      <h2>button</h2>
      <Button size="sm">기본</Button>
      <Button size="md">테스트 2</Button>
      <Button size="lg">테스트 2</Button>
    </>
  );
}

export default App;
