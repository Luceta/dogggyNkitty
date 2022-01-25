import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProducts, getUserProfile, getUserPost } from "../../api/api";
import { logoutUser } from "../../thunks";

function ProfileContainer({ history, user, logout }) {
  const [products, setProducts] = useState(null);
  const [profile, setProfile] = useState("");
  const [posts, setPosts] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const showUserModal = () => {
    setModalOpen(true);
  };

  const closeUserModal = (ev) => {
    if (ev.target.id === "logout-alert") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  const handleLogoutModal = () => {
    setAlertOpen(true);
  };

  const closeAlert = () => {
    setAlertOpen(false);
    setModalOpen(false);
  };

  const handleLogoutAlert = async () => {
    try {
      localStorage.removeItem("access_token");
      logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

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
    getUserData(user.accountname);
  }, []);

  return (
    <Profile
      handleProfileClick={handleProfileClick}
      handleProductClick={handleProductClick}
      handleClick={showUserModal}
      modalClose={closeUserModal}
      modalOpen={modalOpen}
      alertOpen={alertOpen}
      products={products}
      profile={profile}
      posts={posts}
      handleLogoutModal={handleLogoutModal}
      closeAlert={closeAlert}
      logout={handleLogoutAlert}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(ProfileContainer);
