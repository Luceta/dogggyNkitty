import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "../routes";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
