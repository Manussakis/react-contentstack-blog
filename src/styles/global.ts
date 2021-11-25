import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --background-color: #f0f2f5;
        --primary: #E62E4D;
        --secondary: #969CB2;
        --surface: #ffffff;
        --accent: #5429CC;
        --success: #33CC95;
        --danger: #E62E4D;
    }

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 87.5%;

        @media only screen and (min-width: 720px) {
            font-size: 93.75%;
        }

        @media only screen and (min-width: 1080px) {
            font-size: 100%;
        }
    }

    body {
        margin: 0;
        background-color: var(--background-color);
        -webkit-font-smoothing: antialiased;
    }

    body,
    button,
    input,
    textarea {
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    input[type=text],
    input[type=tel],
    input[type=email],
    input[type=number],
    select {
        width: 100%;
    }

    button {
        cursor: pointer;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    strong {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
`;
