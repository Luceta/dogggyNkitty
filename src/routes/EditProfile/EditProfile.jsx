import React from "react";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TopUploadNav from "../../components/shared/TopUploadNav";
import FormField from "../../components/FormField/FormField";

function EditProfile({
  onButtonActive,
  username,
  accountname,
  intro,
  avatar,
  handleClick,
  usernameWarning,
  accoutnameWarning,
  accountValid,
  handleUsernameBlur,
  handleAccountnameBlur,
  handleChangeAvatar,
}) {
  return (
    <>
      <StatusBar />
      <TopUploadNav handleClick={handleClick} setButton={onButtonActive}>
        저장
      </TopUploadNav>
      <Main>
        <EditProfileWrapper>
          <EditProfileForm>
            <h2 className="ir">프로필 수정 창</h2>
            <label htmlFor="profileImg" className="profile-img-label">
              <img src={avatar} alt="user의 프로필 사진" className="profile-img" />
              <input
                type="file"
                id="profileImg"
                name="product-img"
                accept="image/*"
                className="ir"
                onChange={handleChangeAvatar}
              />
            </label>
            <FormField
              labelName="username"
              title="사용자 이름"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              controller={username}
              onBlur={handleUsernameBlur}
            />
            <strong className={usernameWarning ? "input-warning-msg username" : "input-warning-msg"}>
              *2자~10자 이내여야 합니다.
            </strong>
            <FormField
              labelName="accountname"
              title="계정 ID"
              placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
              controller={accountname}
              onBlur={handleAccountnameBlur}
            />

            {accountValid ? (
              <strong className="input-warning-msg accountname">*이미 사용 중인 ID입니다.</strong>
            ) : (
              <strong className={accoutnameWarning ? "input-warning-msg accountname" : "input-warning-msg"}>
                *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
              </strong>
            )}

            <FormField
              labelName="intro"
              title="소개"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요."
              controller={intro}
            />
          </EditProfileForm>
        </EditProfileWrapper>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const EditProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;

const EditProfileForm = styled.form`
  width: 100%;
  .ir {
    position: absolute;
    top: auto;
    left: -100000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .profile-img-label {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    margin: 0 auto 30px;
    cursor: pointer;
  }

  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
  }

  .profile-img-label::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    background: #937456 url("/assets/icon/icon-upload.png") no-repeat center;
    border-radius: 50%;
  }

  .input-warning-msg {
    display: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgb(235, 87, 87);
    margin: -9px 0 20px 0;
  }

  .input-warning-msg.username {
    display: block;
    border-top: 1px solid #eb5757;
    margin-top: -16px;
  }

  .input-warning-msg.accountname {
    display: block;
    border-top: 1px solid #eb5757;
    margin-top: -16px;
  }
`;

export default EditProfile;
