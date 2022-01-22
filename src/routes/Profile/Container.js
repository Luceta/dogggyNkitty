import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProducts, getUserProfile } from "../../api/api";

function ProfileContainer({ history, user }) {
  const [products, setProducts] = useState(null);
  const [profile, setProfile] = useState("");
  const handleProductClick = () => {
    history.push("/product");
  };

  const handleProfileClick = () => {
    history.push("/account/edit");
  };

  useEffect(() => {
    const getUserData = async () => {
      const userProducts = await (await getUserProducts(user.accountname)).json();
      setProducts(userProducts.product);
      const userProfile = await (await getUserProfile(user.accountname)).json();
      setProfile(userProfile.profile);
    };

    getUserData();
  }, []);

  return (
    <Profile
      handleProfileClick={handleProfileClick}
      handleProductClick={handleProductClick}
      products={products}
      user={user}
      profile={profile}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ProfileContainer);
