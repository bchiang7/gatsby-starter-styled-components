import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import mixins from './mixins';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    line-height: 1.25;
    font-family: ${theme.fonts.base};
    font-size: ${theme.fontSizes.base};
  }

  a {
    ${mixins.link};
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  button {
    outline: 0;
    border: 0;
  }

  p {
    margin-top: 0;
  }


`;

export default GlobalStyle;
