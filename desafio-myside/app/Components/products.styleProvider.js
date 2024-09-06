"use client"

import styled from "styled-components"

const styledProducts = styled.main`
    width: 100%;
    min-height: 700px;
    max-height: fit-content;
    padding: 0 60px;

    #products-header{
        margin: 30px auto;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }

    #product-header-search{
        width: 75%;
        margin: 0 30px;
    }

    #search-input{
        width: 100%;
        height: 100%;
        padding: 0 25px;
        background-color: #fafafa;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        font-size: 1.2rem;
        transition: 250ms ease-in;

        &:focus{
            border: 1px solid #ccc;
            box-shadow: 0 0 1px 1px #bdbdbd;
            outline: none;
        }
    }

    #product-header-filter{
        width: 20%;
        position: relative;
    }

    button{
        width: 100%;
        height: 100%;
        font-size: 1.1rem;
        background: #333;
        color: #cecece;
        border-radius: 10px;
        cursor: pointer;
    }

    #popover-filter{
        background-color: #333;
        border-radius: 10px;
        padding: 10px 0;
    }

    select{
        width: 100%;
        font-size: 1.1rem;
        padding: 10px;
        margin: 0;
        background: #333;
        border: 1px solid #737373;
        color: #c4c4c4;
        cursor: pointer;
    }

    option{
        color: #c4c4c4;
    }

    & #products-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #pagination-controls{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;


        button{
            border-radius: 50%;
            width: 35px;
            height: 35px;
            text-align: center;
            font-size: 1.5rem;
            line-height: 0;
            margin: 0 15px;
        }

        #page-index{
            font-size: 1.1rem;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
    }
    

`

export default styledProducts;