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
    box-sizing: border-box;

    & div{
        height: 100%;
        margin: 5px 60px;
    }

    & .cart-container{
        padding: 15px 0;
        box-sizing: border-box;
    }

    #cart-icon{
        cursor: pointer;
    }

    .img{
        height: 100%;
        width: auto;
        object-fit: contain;
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
                priority={true}
                />
            </div>
            <div className="cart-container">
                <Link href={"/Cart"}>
                    <Image
                    src={CartIcon}
                    alt='cart icon'
                    className="img"
                    id="cart-icon"
                    priority={true}
                    />
                </Link>
            </div>
        </StyledHeader>
    )
}