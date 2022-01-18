import React from "react";
import styled from "styled-components";
import Button from "../../components/shared/Button";
import FormField from "../../components/FormField/FormField";

function SignupProfile({
  username,
  accountname,
  intro,
  avatar,
  handleAvatar,
  handleClick,
  handleButton,
  handleUsernameBlur,
  handleAccountnameBlur,
  usernameWarning,
  accoutnameWarning,
}) {
  return (
    <Wrapper>
      <h2>프로필 설정</h2>
      <p className="profile-info-text">나중에 언제든지 변경 할 수 있습니다.</p>
      <label htmlFor="profile-image" className="profile-image-label">
        <img
          src={!avatar ? "/assets/basic-profile-img@lg.png" : avatar}
          alt="profile-avatar"
          className="profile-avatar"
        />
        <input
          type="file"
          name="profileImage"
          id="profile-image"
          accept="image/*"
          className="input-ir"
          onChange={handleAvatar}
        />
      </label>
      <div>
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
        <strong className={accoutnameWarning ? "input-warning-msg accountname" : "input-warning-msg"}>
          *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
        </strong>
        <FormField
          labelName="intro"
          title="소개"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          controller={intro}
        />
        <Button disabled={handleButton} size="lg" onClick={handleClick}>
          감귤마켓 시작하기
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin: 30px 0;
  }

  .profile-info-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 30px;
  }

  .profile-image-label {
    position: relative;
    margin: 0 auto 30px;
  }

  .profile-avatar {
    width: 110px;
  }

  .profile-image-label::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    background: url("/assets/icon/icon-image.png");
    background-color: #c98128;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
  }

  .input-ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
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

export default SignupProfile;
