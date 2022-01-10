import React from "react";
import PropTypes from "prop-types";
import Input from "./input";

export default function SearchInput({ placeholder }) {
  return <Input type="text" placeholder={placeholder} />;
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
