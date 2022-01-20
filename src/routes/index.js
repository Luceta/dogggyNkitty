import React from "react";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home/Container";
import Signup from "./Signup/Container";
import Main from "../components/Main/Main";
import Profile from "./Profile/Profile";
import Product from "./Product/Container";
import Splash from "../components/Splash/Splash";

function Routes({ isLogin }) {
  return (
    <Switch>
      {isLogin ? <Route exact path="/" component={Main} /> : <Route exact path="/" component={Home} />}
      <Route path="/join" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/product" component={Product} />
      <Route path="/splash" component={Splash} />

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
