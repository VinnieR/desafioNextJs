'use client'
import styled from "styled-components";
import Image from 'next/image';
import StoreLogo from './assets/store_logo.png';
import CartIcon from './assets/cart_icon.png';
import Link from "next/link";

const StyledHeader = styled.header`
    color: white;
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #b3b3b3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .cart-container{
        padding: 25px;
        width: 100%;
    }

    .cart-container a{
        display: flex;
        justify-content: center;
    }

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