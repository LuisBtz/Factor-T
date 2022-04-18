import { createGlobalStyle } from "styled-components"

import mieot from '../../assets/fonts/MinionVariableConcept-Roman.eot';
import miwoff from '../../assets/fonts/MinionVariableConcept-Roman.woff';
import miwoff2 from '../../assets/fonts/MinionVariableConcept-Roman.woff2';
import miotf from '../../assets/fonts/MinionVariableConcept-Roman.otf';

import moeot from '../../assets/fonts/Moderat-Regular.eot';
import mowoff from '../../assets/fonts/Moderat-Regular.woff';
import mowoff2 from '../../assets/fonts/Moderat-Regular.woff2';
import mootf from '../../assets/fonts/Moderat-Regular.otf';



export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'MinionVariableConcept-Roman';
  src:  url('${miwoff}') format('woff'),
        url('${miwoff2}') format('woff2'),
        url('${mieot}'),
        url('${mieot}?#iefix') format('embedded-opentype'),
        url('${miotf}') format('truetype');

  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Moderat-Regular';
  src:  url('${mowoff}') format('woff'),
        url('${mowoff2}') format('woff2'),
        url('${moeot}'),
        url('${moeot}?#iefix') format('embedded-opentype'),
        url('${mootf}') format('truetype');

  font-weight: normal;
  font-style: normal;
  font-display: swap;
}




    html {
      scroll-behavior: smooth;
    }
    
    :root {
        --reg: 'Moderat-Regular', sans-serif;
        --serif: 'MinionVariableConcept-Roman', serif;
      --black: #000000;
      --white: #FFFFFF;
    }


    body {
        background-color: var(--white);
        font-family: var(--reg);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        font-feature-settings: 'salt' on;
    }
    main {
    }
    * {
      box-sizing: border-box;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    ::selection {
      background: black;
      color: white;
    }
    button {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }

    i, em {
      font-family: var(--serif);
      font-style: normal;
    }
`