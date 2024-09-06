"use client"

import styled from "styled-components"

const StyledFooter = styled.footer`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    border-top: 1px solid #b3b3b3;
    position: static;
    bottom: 0;
    margin-top: 20px;
`

export default function Footer(){
    return(
        <StyledFooter>
            <span>Made by Vinicius Rodrigues</span>
        </StyledFooter>
    )
}