import React from "react";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TabMenu from "../../components/shared/Tab";
import HeaderBasic from "../../components/shared/HeaderBasic";
import ProductList from "../ProductList/ProductList";
import PostList from "../../components/PostList/PostList";
import Modal from "../../components/Modal/Modal";
import Alert from "../../components/shared/Alert";

function ProfileDetail({
  products,
  profile,
  posts,
  handleClick,
  modalOpen,
  alertOpen,
  modalClose,
  logout,
  closeAlert,
  handleLogoutModal,
}) {
  return (
    <>
      <StatusBar />
      <Header>
        <h1 className="ir">유저 id의 페이지</h1>
        <HeaderBasic handleClick={handleClick} />
      </Header>

      <Main>
        <UserInfo>
          <div className="user-info-wrapper">
            {profile && (
              <div className="user-info">
                <img src={profile.image} alt="user-avatar" className="avatar" />
                <strong className="username">{profile.username}</strong>
                <strong className="user-id">{profile.accountname}</strong>
                <p className="user-intro">{profile.intro}</p>
                <a href="/#followers" className="follower">
                  <strong className="followers-count">{profile.followerCount}</strong>
                  <span className="followers-txt">followers</span>
                </a>
                <a href="/#following" className="following">
                  <strong className="followings-count">{profile.followingCount}</strong>
                  <span className="followings-txt">followings</span>
                </a>

                <div className="button-container">
                  <button type="button" className="message">
                    <span className="ir">메세지 버튼</span>
                  </button>
                  <button type="button" className="follow-btn">
                    언 팔로우
                  </button>
                  <button type="button" className="share-btn">
                    <span className="ir">공유하기 버튼</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </UserInfo>
        <Products>
          <div>
            <h2 className="user-product-tile">판매중인 상품</h2>
            {products && <ProductList products={products} />}
          </div>
        </Products>
        <Posts>
          <h2 className="ir">유저 포스트</h2>
          <DisplaySection>
            <div className="display-buttons">
              <h3 className="ir">display 선택버튼 들</h3>
              <div className="button-wrapper">
                <button type="button" className="list-button">
                  <span className="ir">리스트 형 버튼</span>
                </button>
                <button type="button" className="gallery-button">
                  <span className="ir">갤러리 형 버튼</span>
                </button>
              </div>
            </div>
            {posts && <PostList posts={posts} />}
          </DisplaySection>
        </Posts>
      </Main>
      <Modal open={modalOpen} close={modalClose} logout={handleLogoutModal} />
      {alertOpen && (
        <Alert actionContent="로그아웃" title="로그아웃 하시겠어요?" cancel={closeAlert} handleAction={logout} />
      )}
      <TabMenu />
    </>
  );
}

const Header = styled.header`
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  min-width: 390px;
`;

const UserInfo = styled.header`
  margin-bottom: 6px;

  .user-info-wrapper {
    display: flex;
    justify-content: center;
    border: 0.5px solid #dbdbdb;
  }

  .user-info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 390px;
    width: 100%;
    padding: 30px 16px 26px;
  }

  .avatar {
    width: 110px;
    height: 110px;
    margin-bottom: 16px;
    border-radius: 50%;
  }

  .username {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
  }

  .user-id {
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 16px;
  }

  .user-id::before {
    content: "@";
    margin-right: 3px;
  }

  .user-intro {
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    margin-bottom: 24px;
  }

  a {
    color: black;
  }

  .follower {
    position: absolute;
    top: 65px;
    left: 56px;
    text-align: center;
    cursor: pointer;
  }

  .following {
    position: absolute;
    top: 65px;
    left: 287px;
    text-align: center;
    cursor: pointer;
  }

  .followers-count {
    display: block;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 6px;
  }

  .followers-txt {
    font-size: 10px;
    line-height: 12px;
    color: #767676;
  }

  .followings-count {
    display: block;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #767676;
    margin-bottom: 6px;
  }

  .followings-txt {
    font-size: 10px;
    line-height: 12px;
    color: #767676;
  }

  .button-container {
    display: flex;
    gap: 10px;
  }

  .message {
    width: 34px;
    height: 34px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    background: url("/assets/icon/icon-message-circle.png") no-repeat center / 20px 20px;
  }

  .follow-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: #767676;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  .share-btn {
    width: 34px;
    height: 34px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    background: url("/assets/icon/icon-share.png") no-repeat center / 20px 20px;
  }

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const Products = styled.section`
  display: flex;
  justify-content: center;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
  margin-bottom: 10px;

  .user-product-tile {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
  }

  div {
    padding: 20px 0 20px 16px;
    max-width: 390px;
    width: 100%;
  }
`;

const Posts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const DisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .display-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 0.5px solid #dbdbdb;
    border-bottom: 0.5px solid #dbdbdb;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 390px;
    width: 100%;
    height: 44px;
    padding-right: 16px;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    width: 26px;
    height: 26px;
  }

  .list-button {
    background: url("/assets/icon/icon-post-list-on.png");
    margin-right: 16px;
  }

  .gallery-button {
    background: url("/assets/icon/icon-post-album-off.png");
  }
`;

export default ProfileDetail;
