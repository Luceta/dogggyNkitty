import React from "react";
import Signup from "./Signup";
import useInput from "../../components/hooks/useInput";

export default function SignupContainer() {
  const email = useInput("");
  const password = useInput("");

  const handleClick = (ev) => {
    ev.preventDefault();
  };

  return <Signup email={email} password={password} handleClick={handleClick} />;
}
