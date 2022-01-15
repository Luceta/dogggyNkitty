import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import Routes from "../routes";
import GlobalStyle from "../styles/GlobalStyle";

function App({ isLogin }) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes isLogin={isLogin} />
    </BrowserRouter>
  );
}

const mapStateToPros = (state) => ({
  isLogin: state.ui.lobby.isLogin,
});

export default connect(mapStateToPros)(App);
