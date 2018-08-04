import { injectGlobal } from 'styled-components';
import SectraWoff2 from '../assets/fonts/GT-Sectra-Fine-Regular.woff2';
import SectraWoff from '../assets/fonts/GT-Sectra-Fine-Regular.woff';
import UniversWoff2 from '../assets/fonts/Univers-Bold.woff2';
import UniversWoff from '../assets/fonts/Univers-Bold.woff';

injectGlobal([
  `
  @font-face {
      font-family: Sectra;
      src:url("${SectraWoff2}") format("woff2"),
          url("${SectraWoff}") format("woff");
    }
  @font-face {
      font-family: Univers;
      src:url("${UniversWoff2}") format("woff2");
          url("${UniversWoff}") format("woff");
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
