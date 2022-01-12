import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/join" component={Signup} />
    </Switch>
  );
}

export default Routes;
