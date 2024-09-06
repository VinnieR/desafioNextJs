import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #262626;
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
        width: auto;
        object-fit: contain;
    }

    Link{
        width: 100%;
        height: 100%;
        background-color: yellow;
    }

    `

export default globalStyle;