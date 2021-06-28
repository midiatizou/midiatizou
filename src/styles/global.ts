import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: Helvetica, sans-serif;
    background-color: #2B2B2E;
  }

  html, body, #__next {
    height: 100%
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
