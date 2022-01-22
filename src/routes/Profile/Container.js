import React from "react";
import Profile from "./Profile";

export default function ProfileContainer({ history }) {
  const handleProductClick = () => {
    history.push("/product");
  };

  const handleProfileClick = () => {
    history.push("/account/edit");
  };
  return <Profile handleProfileClick={handleProfileClick} handleProductClick={handleProductClick} />;
}
