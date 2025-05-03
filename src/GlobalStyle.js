import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, 
    *::after, 
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.colors.white};
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        scroll-behavior: smooth;

    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
    }

    p {
        letter-spacing: 0.05em; 
        font-weight: lighter;
    }

`;
