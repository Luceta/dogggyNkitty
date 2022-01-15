import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import Main from "../components/Main/Main";

function Routes({ isLogin }) {
  return (
    <Switch>
      {isLogin ? <Route exact path="/" component={Main} /> : <Route exact path="/" component={Home} />}
      <Route path="/join" component={Signup} />
    </Switch>
  );
}

export default Routes;
