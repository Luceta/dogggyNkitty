import React, { useState } from "react";
import Signup from "./Signup";
import useInput from "../../components/hooks/useInput";
import { checkEmailAPI, imageUploadAPI, signupAPI } from "../../api/api";

export default function SignupContainer({ history }) {
  const email = useInput("");
  const password = useInput("");
  const username = useInput("");
  const accountname = useInput("");
  const intro = useInput("");

  const [showDisplay, setShowDisplay] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [usernameWarning, setUsernameWarning] = useState(false);
  const [accountnameWarning, setAccountnameWarning] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [avatar, setAvatar] = useState("");
  const [validCount, setValidCount] = useState(0);

  const imageUpload = async (files) => {
    const response = await imageUploadAPI(files);
    const result = await response.json();
    const imageSrc = result.filename;

    return imageSrc;
  };

  const handleChangeFile = async (ev) => {
    const { files } = ev.target;
    const image = await imageUpload(files);
    const imageURL = `http://146.56.183.55:5050/${image}`;
    setAvatar(imageURL);
  };

  const isButtonActive = () => {
    if (validCount !== 0) {
      if (!emailWarning && !passwordWarning) {
        setButtonActive(false);
      }
    } else {
      setButtonActive(true);
    }
  };

  const validateExistUser = async (value) => {
    const response = await checkEmailAPI(value);
    const result = await response.json();
    const { message } = result;
    const failMsg = "이미 가입된 이메일 주소 입니다.";

    if (message === failMsg) {
      setEmailWarning(true);
      setEmailValid(true);
    } else {
      setEmailWarning(false);
      setEmailValid(true);
    }
  };

  const emailValidation = (element) => {
    const data = element;
    const dataLength = data.split("").length;

    if (dataLength !== 0) {
      const emailReg = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

      if (!emailReg.test(data)) {
        setEmailWarning(true);
      } else {
        validateExistUser(element);
        setEmailWarning(false);
        setValidCount(validCount + 1);
        isButtonActive();
      }
      isButtonActive();
    }
  };

  const passwordValidation = (element) => {
    const data = element;
    const dataLength = data.split("").length;
    if (dataLength < 6) {
      setPasswordWarning(true);
    } else {
      setPasswordWarning(false);
      setValidCount(validCount + 1);
      isButtonActive();
    }
  };

  const handleNextClick = (ev) => {
    ev.preventDefault();
    setShowDisplay(true);
    setValidCount(0);
    setButtonActive(true);
  };

  const handleJoin = async (ev) => {
    // TODO : API 통신 보내고 회원가입 시키고 리덕스 상태변경패치 하여 메인 페이지 이동
    ev.preventDefault();
    const response = await signupAPI(
      email.value,
      password.value,
      username.value,
      accountname.value,
      intro.value,
      avatar
    );
    const { message } = await response.json();
    const okMsg = "회원가입 성공";
    if (message === okMsg) {
      history.push("/");
    }
  };

  const usernameValidation = (element) => {
    const dataLength = element.split("").length;
    if (dataLength < 2 || dataLength > 10) {
      setUsernameWarning(true);
    } else {
      setUsernameWarning(false);
      setValidCount(validCount + 1);
      isButtonActive();
    }
  };

  const accountnameValidation = (element) => {
    const dataLength = element.split("").length;
    if (dataLength !== 0) {
      const userIdReg = /[^\w_.]/g;
      if (!userIdReg.test(element)) {
        setAccountnameWarning(false);
        setValidCount(validCount + 1);
        isButtonActive();
      } else {
        setAccountnameWarning(true);
      }
    }
  };

  return (
    <Signup
      email={email}
      password={password}
      username={username}
      accountname={accountname}
      intro={intro}
      avatar={avatar}
      handleDisplay={showDisplay}
      handleAvatar={handleChangeFile}
      handleNextClick={handleNextClick}
      handleJoin={handleJoin}
      handleEmailBlur={emailValidation}
      handlePasswordBlur={passwordValidation}
      handleUsernameBlur={usernameValidation}
      handleAccountnameBlur={accountnameValidation}
      emailWarning={emailWarning}
      emailValid={emailValid}
      passwordWarning={passwordWarning}
      usernameWarning={usernameWarning}
      accountnameWarning={accountnameWarning}
      handleButton={buttonActive}
    />
  );
}
