import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: ${props => props.theme.background};
        height: 100vh;
        /* border: 1px solid green; */
    }
`

export default GlobalStyle