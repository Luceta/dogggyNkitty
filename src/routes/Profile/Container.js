import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProducts, getUserProfile, getUserPost } from "../../api/api";

function ProfileContainer({ history, user }) {
  const [products, setProducts] = useState(null);
  const [profile, setProfile] = useState("");
  const [posts, setPosts] = useState(null);
  const currentLocation = history.location.pathname;

  const handleProductClick = () => {
    history.push("/product");
  };

  const handleProfileClick = () => {
    history.push("/account/edit");
  };

  const getUserData = async (accountname) => {
    const userProducts = await (await getUserProducts(accountname)).json();
    const userProfile = await (await getUserProfile(accountname)).json();
    const userPosts = await (await getUserPost(accountname)).json();
    setProducts(userProducts.product);
    setProfile(userProfile.profile);
    setPosts(userPosts.post);
  };

  useEffect(() => {
    if (currentLocation === "/profile") {
      getUserData(user.accountname);
    } else {
      const accountname = currentLocation.split("/")[2];
      getUserData(accountname);
    }
  }, [currentLocation]);

  return (
    <Profile
      handleProfileClick={handleProfileClick}
      handleProductClick={handleProductClick}
      products={products}
      profile={profile}
      posts={posts}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ProfileContainer);
