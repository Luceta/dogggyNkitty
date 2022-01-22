import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditProfile from "./EditProfile";
import useInput from "../../components/hooks/useInput";
import { checkAccountAPI } from "../../api/api";
import imageUpload from "../../utils/upload";
import { updateProfile } from "../../thunks";

function EditProfileContainer({ user, updateUser, history }) {
  const [usernameWarning, setUsernameWarning] = useState(false);
  const [accoutnameWarning, setAccountnameWarning] = useState(false);
  const [accountValid, setAccountValid] = useState(false);
  const [validCount, setValidCount] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [button, setButton] = useState(true);
  const username = useInput("");
  const accountname = useInput("");
  const intro = useInput("");

  const displayUserInfo = () => {
    username.setValue(user.username);
    accountname.setValue(user.accountname);
    intro.setValue(user.intro);
    setAvatar(user.image);
  };

  useEffect(() => {
    displayUserInfo();
  }, []);

  const backToProfile = () => {
    history.push("/profile");
  };

  const handleClick = async () => {
    const userInfo = {
      id: user.id,
      email: user.email,
      username: username.value,
      accountname: accountname.value,
      intro: intro.value,
      image: avatar,
    };

    await updateUser(userInfo);
    history.push("/profile");
  };

  const isButtonActive = () => {
    if (!usernameWarning && !accoutnameWarning) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleChangeFile = async (ev) => {
    const { files } = ev.target;
    const BASE_URL = "http://146.56.183.55:5050";
    const image = await imageUpload(files);
    const imageURL = `${BASE_URL}/${image}`;
    setAvatar(imageURL);
  };

  const usernameValidation = (element) => {
    const dataLength = element.split("").length;
    if (dataLength < 2 || dataLength > 10) {
      setUsernameWarning(true);
    } else {
      setUsernameWarning(false);
      setValidCount(validCount + 1);
    }
  };

  const validateExistUser = async (value) => {
    const response = await checkAccountAPI(value);
    const result = await response.json();
    const { message } = result;
    const failMsg = "이미 가입된 계정ID 입니다.";

    if (message === failMsg) {
      setAccountValid(true);
      setAccountnameWarning(true);
    }
  };

  const accountnameValidation = (element) => {
    const dataLength = element.split("").length;
    if (dataLength !== 0) {
      const userIdReg = /[^\w_.]/g;
      if (!userIdReg.test(element)) {
        validateExistUser(element);
        setAccountnameWarning(false);
        setValidCount(validCount + 1);
      } else {
        setAccountnameWarning(true);
      }
    }
  };

  useEffect(() => {
    isButtonActive();
  }, [usernameWarning, accoutnameWarning]);

  return (
    <EditProfile
      onButtonActive={button}
      avatar={avatar}
      username={username}
      accountname={accountname}
      intro={intro}
      usernameWarning={usernameWarning}
      accoutnameWarning={accoutnameWarning}
      accountValid={accountValid}
      handleButton={backToProfile}
      handleClick={handleClick}
      handleUsernameBlur={usernameValidation}
      handleAccountnameBlur={accountnameValidation}
      handleChangeAvatar={handleChangeFile}
    />
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateProfile(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
