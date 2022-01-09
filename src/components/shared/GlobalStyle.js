import { createGlobalStyle } from "styled-components";
import "../../styles/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Spoqa Han Sans";
  }

`;

export default GlobalStyle;
