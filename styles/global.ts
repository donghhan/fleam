import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.black}
    }

    span {
        display: inline-block;
    }

    input {
        border: transparent;
        
        &:focus {
            outline: none;
        }
    }

    button {
        border: transparent;
        cursor: pointer;
    }
`;
