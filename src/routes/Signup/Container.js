import React, { useState } from "react";
import Signup from "./Signup";
import useInput from "../../components/hooks/useInput";
import { checkEmailAPI } from "../../api/api";

export default function SignupContainer() {
  const email = useInput("");
  const password = useInput("");
  const username = useInput("");
  const accountname = useInput("");
  const intro = useInput("");

  const [showDisplay, setShowDisplay] = useState(false);
  const [style, setStyle] = useState({ display: "block" });
  const [emailWarning, setEmailWarning] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [validCount, setValidCount] = useState(0);

  const isButtonActive = () => {
    if (validCount !== 0) {
      if (emailWarning === false && passwordWarning === false) {
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

  console.log(validCount, "check");

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

  const handleJoinClick = (ev) => {
    ev.preventDefault();
    setShowDisplay(true);
    setStyle({ display: "none" });
  };

  const handleProfileClick = (ev) => {};

  return (
    <Signup
      email={email}
      password={password}
      username={username}
      accountname={accountname}
      intro={intro}
      handleJoinClick={handleJoinClick}
      handleProfileClick={handleProfileClick}
      handleProfileDisplay={showDisplay}
      handleJoinDisplay={style}
      handleEmailBlur={emailValidation}
      handlePasswordBlur={passwordValidation}
      emailWarning={emailWarning}
      emailValid={emailValid}
      passwordWarning={passwordWarning}
      handleButton={buttonActive}
    />
  );
}
