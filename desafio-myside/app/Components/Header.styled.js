'use client'
import styled from "styled-components";
import Image from 'next/image';
import StoreLogo from './assets/store_logo.png';
import CartIcon from './assets/cart_icon.png';
import Link from "next/link";

const StyledHeader = styled.header`
    color: white;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #b3b3b3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div{
        height: 100%;
        margin: 5px 60px;
    }

    & .cart-container{
        padding: 15px 0;
    }

/*
    .cart-container{
        padding: 25px;
        width: 100%;
    }

    .cart-container a{
        display: flex;
        justify-content: center;
        max-width: fit-content;
    } */

    #cart-icon{
        cursor: pointer;
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <div className="logo-container">
                <Image
                src={StoreLogo}
                alt='Store logo'
                className="img"
                />
            </div>
            <div className="cart-container">
                <Link href={"/Cart"}>
                    <Image
                    src={CartIcon}
                    alt='cart icon'
                    className="img"
                    id="cart-icon"
                    />
                </Link>
            </div>
        </StyledHeader>
    )
}