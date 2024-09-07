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
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
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
    
    .flex-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;
    }

    .capitalize{
        text-transform: capitalize;
    }

    .price{
        color: #348820;
    }

    `

export default globalStyle;