"use client"

import styled from "styled-components"

const styledCard = styled.div`
width: 350px;
height: 450px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 15px ;
box-shadow: 0 0 1px 3px #ececec;
border: 1px solid #bbb0b0;
cursor: pointer;

& .card-image-container{
    width: 100%;
    height: 200px;
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
    padding: 20px;
}

& .card-title-container{
    height: 100px;
    display: flex;
    align-items: center;
}

& .card-price{
    text-align: center;
    margin-top: 15px;
    color: #348820;
    font-size: 1.2rem;
}
`

export default styledCard;