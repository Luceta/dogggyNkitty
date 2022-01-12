import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "../routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
