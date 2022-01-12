import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../../styles/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    width:100%;
    height:100%;
    font-family: "Spoqa Han Sans";
  }

  a {
    text-decoration:none;
    color: #767676;
  }

`;

export default GlobalStyle;
