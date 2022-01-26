import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProducts, getUserProfile, getUserPost, deleteProductAPI } from "../../api/api";
import { logoutUser } from "../../thunks";

function ProfileContainer({ history, user, logout }) {
  const [products, setProducts] = useState(null);
  const [profile, setProfile] = useState("");
  const [posts, setPosts] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [productAlert, setProductAlert] = useState(false);
  const [imageId, setImageId] = useState("");

  // user Modal menu open
  const showUserModal = () => {
    setModalOpen(true);
    setUserModal(true);
  };

  // 회색 배경 클릭시 모달 닫힘
  const closeUserModal = (ev) => {
    if (ev.target.id === "logout-alert" || ev.target.id === "edit" || ev.target.id === "delete") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  // logout Alert띄어줌
  const handleLogoutModal = () => {
    setLogoutAlert(true);
  };

  // 로그아웃 취소 시 or  삭제 취소시
  const closeAlert = () => {
    setLogoutAlert(false);
    setModalOpen(false);
    setProductAlert(false);
  };

  // 로그아웃 확인시 로그아웃 처리
  const handleLogoutAlert = async () => {
    try {
      localStorage.removeItem("access_token");
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  // product Modal menu open
  const openProductModal = (ev) => {
    const image = ev.target.dataset.id;
    setImageId(image);
    setModalOpen(true);
    setProductModal(true);
  };

  // product Delete alert
  const handleDelete = () => {
    setProductAlert(true);
  };

  const handleDeleteAlert = async () => {
    try {
      const result = await (await deleteProductAPI(imageId)).json();
      if (result.status === "200") {
        closeAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 모달 수정 버튼 눌렀을 시 처리
  const handleEdit = () => {
    history.push({
      pathname: `/product/${imageId}/edit`,
      productId: imageId,
    });
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
      logoutAlert={logoutAlert}
      productAlert={productAlert}
      userModal={userModal}
      productModal={productModal}
      products={products}
      profile={profile}
      posts={posts}
      openProductModal={openProductModal}
      handleLogoutModal={handleLogoutModal}
      closeAlert={closeAlert}
      logout={handleLogoutAlert}
      handleDeleteProduct={handleDeleteAlert}
      deleteProduct={handleDelete}
      editProduct={handleEdit}
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
