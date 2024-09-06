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
    }

    #product-header-filter{
        width: 20%;
    }

    #filter-button{
        width: 100%;
        height: 100%;
        font-size: 1.1rem;
        background: #333;
        color: #cecece;
        border-radius: 10px;
        cursor: pointer;
    }

    & #products-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export default styledProducts;