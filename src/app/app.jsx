import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import Routes from "../routes";
import GlobalStyle from "../styles/GlobalStyle";
import Splash from "../components/Splash/Splash";

function App({ isLogin }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function splash() {
      return setTimeout(() => setLoading(false), 1000);
    }

    splash();

    return () => clearTimeout(splash);
  }, []);

  return loading ? (
    <>
      <GlobalStyle />
      <Splash />
    </>
  ) : (
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
