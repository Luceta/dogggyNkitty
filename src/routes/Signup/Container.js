import React, { useState } from "react";
import Signup from "./Signup";
import useInput from "../../components/hooks/useInput";
import { checkEmailAPI, imageUploadAPI } from "../../api/api";

export default function SignupContainer() {
  const email = useInput("");
  const password = useInput("");
  const username = useInput("");
  const accountname = useInput("");
  const intro = useInput("");

  const [imageFile, setImageFile] = useState(null);

  const handleChangeFile = async (ev) => {
    const file = ev.target.files[0];
    const testForm = new FormData();

    testForm.append("img", file);
    console.log(testForm, "why empty obejct?");

    setImageFile(ev.target.files);

    const response = await imageUploadAPI(imageFile);
    const result = await response.json();
    console.log(result, "result");
  };

  const [showDisplay, setShowDisplay] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [usernameWarning, setUsernameWarning] = useState(false);
  const [accoutnameWarning, setAccountnameWarning] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [validCount, setValidCount] = useState(0);

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
  };

  const handleJoin = () => {};

  const usernameValidation = (element) => {
    const dataLength = element.split("").length;
    if (dataLength < 2 || dataLength > 10) {
      setUsernameWarning(true);
    } else {
      setUsernameWarning(false);
    }
  };

  const accountnameValidation = (element) => {
    const dataLength = element.split("").length;
    if (dataLength !== 0) {
      const userIdReg = /[^\w_.]/g;
      if (!userIdReg.test(element)) {
        setAccountnameWarning(false);
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
      avatar={handleChangeFile}
      handleNextClick={handleNextClick}
      handleJoin={handleJoin}
      handleDisplay={showDisplay}
      handleEmailBlur={emailValidation}
      handlePasswordBlur={passwordValidation}
      handleUsernameBlur={usernameValidation}
      handleAccountnameBlur={accountnameValidation}
      emailWarning={emailWarning}
      emailValid={emailValid}
      passwordWarning={passwordWarning}
      usernameWarning={usernameWarning}
      accoutnameWarning={accoutnameWarning}
      handleButton={buttonActive}
    />
  );
}
