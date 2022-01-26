import React from "react";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home/Container";
import Signup from "./Signup/Container";
import Main from "../components/Main/Main";
import Profile from "./Profile/Container";
import Product from "./Product/Container";
import EditProfile from "./EditProfile/Container";
import Search from "./Search/Container";
import PostUpload from "./PostUpload/Container";
import ProfileDetail from "./ProfileDetail/Container";
import NotFound from "../components/NotFound/NotFound";
import ProductEdit from "./ProductEdit/ProductEdit";

function BeforeLogin() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

function AfterLogin() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/join" component={Signup} />
      <Route path="/search" component={Search} />
      <Route path="/account/edit" component={EditProfile} />
      <Route path="/chat/list" component={Search} />
      <Route path="/post/upload" component={PostUpload} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/profile/:accountname" component={ProfileDetail} />
      <Route exact path="/product" component={Product} />
      <Route path="/product/:productId/edit" component={ProductEdit} />
      <Route path="*" component={NotFound} />
      <Redirect to="/" />
    </Switch>
  );
}

export default function Routes({ isLogin }) {
  return isLogin ? <AfterLogin /> : <BeforeLogin />;
}
