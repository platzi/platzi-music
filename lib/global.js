import { injectGlobal } from 'styled-components';
import { pinkTheme } from '../lib/theme.js';

export const globalStyles = injectGlobal`
  body {
    font-family: ${pinkTheme.font };
  }
  @font-face {
    font-family: 'icomoon';
    src:  url('../static/fonts/icomoon.eot?cj9iws');
    src:  url('../static/fonts/icomoon.eot?cj9iws#iefix') format('embedded-opentype'),
      url('../static/fonts/icomoon.ttf?cj9iws') format('truetype'),
      url('../static/fonts/icomoon.woff?cj9iws') format('woff'),
      url('../static/fonts/icomoon.svg?cj9iws#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-arrow-bottom:before {
    content: "\\e905";
  }
  .icon-arrow-top:before {
    content: "\\e900";
  }
  .icon-next:before {
    content: "\\e901";
  }
  .icon-previous:before {
    content: "\\e902";
  }
  .icon-pause:before {
    content: "\\e903";
  }
  .icon-play:before {
    content: "\\e904";
  }
`

