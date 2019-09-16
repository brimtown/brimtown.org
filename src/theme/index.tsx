import { createGlobalStyle } from 'styled-components';
import { Sectra, Univers, America, AmericaExtended } from './typography';

const breakpoints = ['480px', '768px', '1024px'];

const theme = {
  animations: {
    fast: '200ms ease-out',
  },
  colors: {
    black: '#260700',
    burnt: '#802200',
    orange: '#ff5800',
    cream: '#ffd58d',
    lightcream: '#fff4e9',
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
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, img, ol, ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, section, summary {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
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
  body {
    background-color: ${theme.colors.orange};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.america};
    transition: background-color ${theme.animations.fast};
  }
  a {
    text-decoration: none;
  }
  ::selection {
    background: ${theme.colors.cream};
  }
`;

export default theme;
