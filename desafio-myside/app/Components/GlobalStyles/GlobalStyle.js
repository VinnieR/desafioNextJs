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


    h1, h2, h3, h4, h5, h6{
        font-family: "tahoma", "arial", sans-serif;
    }

    p, span{
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    button{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    `

export default globalStyle;