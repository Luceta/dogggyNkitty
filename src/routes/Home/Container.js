import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import useInput from "../../components/hooks/useInput";
import { getToken } from "../../thunks";

function HomeContainer({ loginStatus, login }) {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [warning, setWarning] = useState(false);
  const email = useInput("");
  const password = useInput("");

  const loginButtonActive = () => {
    const emailInputLength = email.value.split("").length;
    const passwordInputLength = password.value.split("").length;

    if (emailInputLength > 1 && passwordInputLength > 1) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    loginButtonActive();
  }, [email, password]);

  useEffect(() => {
    return () => setWarning(false);
  }, []);

  const handleClick = async (ev) => {
    ev.preventDefault();
    await login(email.value, password.value);
    if (!loginStatus) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  return (
    <Home
      email={email}
      password={password}
      handleClick={handleClick}
      handleDisplay={warning}
      setLoginDisplay={setLoginDisplay}
      loginDisplay={loginDisplay}
      isActive={isActive}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.ui.lobby.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(getToken(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
