import { injectGlobal } from 'styled-components';
import { Sectra, Univers } from './typography';

injectGlobal([
  `
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
  ::selection {
    background: #ffd58d;
  }
  body {
    margin: 0;
    background-color: #ff5800;
  }
  html {
    font: 112.5%/1.45em georgia, serif;
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
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`,
]);

const theme = {
  colors: {
    black: '#331204',
    orange: '#ff5800',
    cream: '#ffd58d',
  },
};

export default theme;
