import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    .img{
        height: 100%;
        object-fit: contain;
    }
    `

export default globalStyle;