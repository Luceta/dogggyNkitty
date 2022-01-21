import React from "react";
import PropTypes from "prop-types";
import Input from "./input";

export default function SearchInput({ placeholder, onKeyUp, onChange }) {
  return <Input type="text" placeholder={placeholder} onKeyUp={onKeyUp} onChange={(ev) => onChange(ev.target.value)} />;
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
