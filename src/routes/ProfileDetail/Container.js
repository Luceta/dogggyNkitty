import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileDetail from "./ProfileDetail";
import { getUserProducts, getUserProfile, getUserPost } from "../../api/api";
import { logoutUser } from "../../thunks";

function ProfileDetailContainer({ history, logout }) {
  const { accountname } = useParams();
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

  const getUserData = async (account) => {
    try {
      const userProfile = await (await getUserProfile(account)).json();
      const userProducts = await (await getUserProducts(account)).json();
      const userPosts = await (await getUserPost(account)).json();
      setProducts(userProducts.product);
      setProfile(userProfile.profile);
      setPosts(userPosts.post);

      if (userProfile.status === "404") {
        history.push("/404");
      }
    } catch (err) {
      if (err.state === "404") {
        history.push("/404");
      }
    }
  };

  useEffect(() => {
    getUserData(accountname);
  }, [accountname]);

  return (
    <ProfileDetail
      products={products}
      profile={profile}
      posts={posts}
      modalOpen={modalOpen}
      alertOpen={alertOpen}
      closeAlert={closeAlert}
      handleClick={showUserModal}
      modalClose={closeUserModal}
      handleLogoutModal={handleLogoutModal}
      logout={handleLogoutAlert}
    />
  );
}

const mapDispatchToPros = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToPros)(ProfileDetailContainer);
