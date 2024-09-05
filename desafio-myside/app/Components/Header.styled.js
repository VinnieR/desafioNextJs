'use client'
import styled from "styled-components";
import Image from 'next/image'
import StoreLogo from '../assets/store_logo.png'

const StyledHeader = styled.header`
    color: white;
    width: 100%;
    height: 125px;
    border-bottom: 1px solid #b3b3b3;

    & div{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export default function Header(){
    return(
        <StyledHeader>
            <div>
                <Image
                src={StoreLogo}
                alt='Store logo'
                className="img"
                />
            </div>
        </StyledHeader>
    )
}