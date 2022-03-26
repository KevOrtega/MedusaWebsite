import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        font-size: 1em;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root, main {
        height: 100vh;
        min-width: 300px;
        min-height: 300px;
    }

    body {
        font-size: 2vmin;
    }
`