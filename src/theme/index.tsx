import { createGlobalStyle } from 'styled-components';
import { Sectra, Univers, America, AmericaExtended } from './typography';

const breakpoints = ['480px', '768px', '1024px'];

const theme = {
  colors: {
    black: '#260700',
    orange: '#ff5800',
    cream: '#ffd58d',
  },
  fonts: {
    sectra: 'Sectra, georgia, serif',
    univers: 'Univers, Helvetica, sans-serif',
    america: 'America, Helvetica, sans-serif',
    americaExtended: 'AmericaExtended, Helvetica, sans-serif',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: Sectra;
      font-display: block;
      src:url("${Sectra.woff2}") format("woff2"),
          url("${Sectra.woff}") format("woff");
  }
  @font-face {
      font-family: Univers;
      font-display: block;
      src:url("${Univers.woff2}") format("woff2");
          url("${Univers.woff}") format("woff");
  }
  @font-face {
      font-family: America;
      font-display: block;
      src:url("${America.woff2}") format("woff2");
  }
  @font-face {
      font-family: AmericaExtended;
      font-display: block;
      src:url("${AmericaExtended.woff2}") format("woff2");
  }
  ::selection {
    background: ${theme.colors.cream};
  }
  body {
    margin: 0;
    background-color: ${theme.colors.orange};
    color: ${theme.colors.black};
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
    font-size: 100%;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
`;

export default theme;
