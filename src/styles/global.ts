import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


body {
  height: 100vh;

  padding:0 0px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;

  background: #f1faee;
}

`;
