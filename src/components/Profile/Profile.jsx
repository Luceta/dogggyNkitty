import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import FormField from "../FormField/FormField";

function Profile({ username, accountname, intro, handleClick }) {
  return (
    <Wrapper>
      <h2>프로필 설정</h2>
      <p className="profile-info-text">나중에 언제든지 변경 할 수 있습니다.</p>
      <label htmlFor="profile-image" className="profile-image-label">
        <img src="/assets/basic-profile-img@lg.png" alt="profile-avatar" className="profile-avatar" />
        <input type="file" name="profileImage" id="profile-image" accept="image/*" className="input-ir" />
      </label>
      <div>
        <FormField
          labelName="username"
          title="사용자 이름"
          type="password"
          placeholder="2~10자 이내여야 합니다."
          controller={username}
        />
        <strong className="input-warning-msg">*2자~10자 이내여야 합니다.</strong>
        <FormField
          labelName="accountname"
          title="계정 ID"
          placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          controller={accountname}
        />
        <FormField
          labelName="intro"
          title="소개"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          controller={intro}
        />
        <Button size="lg" onClick={handleClick}>
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
    margin-top: 6px;
  }

  .input-warning-msg.password {
    margin-bottom: 30px;
  }
`;

export default Profile;
