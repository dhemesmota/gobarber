import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @-webkit-keyframes autofill {
    to {
        font-family: 'Roboto Slab', serif;
        color: #f4ede8;
        background: transparent;
        font-size: 16px;
      }
  }
  input:-webkit-autofill {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    -webkit-text-size-adjust: 16px !important;
    -webkit-text-fill-color: #f4ede8 !important;
  }
`;
