import React from "react";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TabMenu from "../../components/shared/Tab";
import HeaderBasic from "../../components/shared/HeaderBasic";
import ProductList from "../ProductList/ProductList";

function Profile({ handleProfileClick, handleProductClick, products, user, profile }) {
  return (
    <>
      <StatusBar />
      <Header>
        <h1 className="ir">유저 id의 페이지</h1>
        <HeaderBasic />
      </Header>

      <Main>
        <UserInfo>
          <div className="user-info-wrapper">
            <div className="user-info">
              <img src="http://146.56.183.55:5050/Ellipse.png" alt="user-avatar" className="avatar" />
              <strong className="username">{user.username}</strong>
              <strong className="user-id">{user.accountname}</strong>
              <p className="user-intro">{user.intro}</p>
              <a href="/#followers" className="follower">
                <strong className="followers-count">{profile.followerCount}</strong>
                <span className="followers-txt">followers</span>
              </a>
              <a href="/#following" className="following">
                <strong className="followings-count">{profile.followingCount}</strong>
                <span className="followings-txt">followings</span>
              </a>
              <div className="user-info-btns">
                <button type="button" onClick={handleProfileClick}>
                  프로필 수정
                </button>
                <button type="button" className="product-add-button" onClick={handleProductClick}>
                  상품 등록
                </button>
              </div>
            </div>
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
        </Posts>
      </Main>
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

  .user-info-btns {
    button {
      background-color: #fff;
      border: 1px solid #dbdbdb;
      border-radius: 30px;
      width: 120px;
      height: 34px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #767676;
    }

    .product-add-button {
      width: 100px;
      height: 34px;
      margin-left: 12px;
    }
  }
`;

const Products = styled.section`
  display: flex;
  justify-content: center;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;

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
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export default Profile;
