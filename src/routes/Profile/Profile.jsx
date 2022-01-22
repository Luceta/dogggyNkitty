import React from "react";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TabMenu from "../../components/shared/Tab";
import HeaderBasic from "../../components/shared/HeaderBasic";

function Profile({ history }) {
  const handleProductClick = () => {
    history.push("/product");
  };


  const handleProfileClick = () => {
    history.push("/account/edit");
  };

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
              <strong className="username">청귤좋아</strong>
              <strong className="user-id">유저 아이디</strong>
              <p className="user-intro">유저 소개란</p>
              <a href="/#followers" className="follower">
                <strong className="followers-count">1</strong>
                <span className="followers-txt">followers</span>
              </a>
              <a href="/#following" className="following">
                <strong className="followings-count">0</strong>
                <span className="followings-txt">followings</span>
              </a>
              <div className="user-info-btn-boxs">

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
            <ul className="product-list">
              <li className="user-product">
                <figure>
                  <img
                    src="http://146.56.183.55:5050/1642440242659.jpeg"
                    alt="user-product"
                    className="product-image"
                  />
                  <figcaption className="product-info">
                    <strong className="product-name">야너두?</strong>
                    <strong className="product-price">1,234 원</strong>
                  </figcaption>
                </figure>
              </li>

              <li className="user-product">
                <figure>
                  <img
                    src="http://146.56.183.55:5050/1642440242659.jpeg"
                    alt="user-product"
                    className="product-image"
                  />
                  <figcaption className="product-info">
                    <strong className="product-name">야너두?</strong>
                    <strong className="product-price">1,234 원</strong>
                  </figcaption>
                </figure>
              </li>

              <li className="user-product">
                <figure>
                  <img
                    src="http://146.56.183.55:5050/1642440242659.jpeg"
                    alt="user-product"
                    className="product-image"
                  />
                  <figcaption className="product-info">
                    <strong className="product-name">야너두?</strong>
                    <strong className="product-price">1,234 원</strong>
                  </figcaption>
                </figure>
              </li>

              <li className="user-product">
                <figure>
                  <img
                    src="http://146.56.183.55:5050/1642440242659.jpeg"
                    alt="user-product"
                    className="product-image"
                  />
                  <figcaption className="product-info">
                    <strong className="product-name">야너두?</strong>
                    <strong className="product-price">1,234 원</strong>
                  </figcaption>
                </figure>
              </li>
            </ul>
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

  .user-info-btn-boxs {
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

  .product-list {
    display: flex;
    gap: 10px;
    overflow-x: scroll;
  }

  .user-product {
    cursor: pointer;
  }

  .product {
    min-width: 140px;
  }

  .product-image {
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  .product-info {
    padding: 6px 2px 0;
  }

  .product-name {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
  }

  .product-price {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
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
