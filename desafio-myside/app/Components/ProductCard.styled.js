"use client"

import styled from "styled-components"

const styledCard = styled.a`
    width: 350px;
    height: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 15px ;
    box-shadow: 0 0 1px 3px #ececec;
    border: 1px solid #bbb0b0;
    cursor: pointer;
    background-color: #fff;
    transition: 350ms ease-in all;

    &:hover{
        transform: scale(1.05);
    }

    & .card-image-container{
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #bbb0b0;
    }

    & .card-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 10px 20px 20px;
        line-height: 1.3;
    }

    & .card-title-container{
        height: 100px;
        display: flex;
        align-items: center;
    }

    & .card-price{
        text-align: center;
        margin-top: 15px;
        font-size: 1.5rem;
        font-family: 'Times New Roman', Times, serif;
    }

    @media (max-width: 879px) {
        width: 250px;
        height: 730px;

        h3{
            margin-top: 45px;
        }
    }

    @media (max-width: 680px){
        width: 100%;
        height: 550px
    }

    @media (max-width: 485px){
        height: 700px
    }
`

export default styledCard;