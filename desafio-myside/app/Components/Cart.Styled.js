'use client'

import styled from "styled-components";

const Cart = styled.div`
margin: 15px auto;
    

    #cart-header{
        margin: 10px 0;
    }

    #cart-subheader{
        margin: 10px 0 20px;
    }

    #cart-item-container{
        list-style: none;
    }

    .cart-container{
        display: flex;
    }

    .cart-item{
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 5px;
        justify-content: space-between;
    }

    .cart-img{
        width: 100px;
        padding: 10px;
        margin: 10px 15px;
    }

    .cart-item-spec{
        padding: 10px 0;
        width: 600px;
        /* margin: 10px; */
    }

    .cart-item-info-container{
        padding: 20px 40px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cart-item-info{
        width: 100%;
        text-align: center;
        margin: 10px auto;
    }

    .cart-item-unit-price{
        font-size: 1.1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .cart-item-quantity{
        width: 100%;
        display: flex;
        text-align: center;
    }

    .cart-item-quantity button{
        width: 100%;
        padding: 3px;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 1px solid #bdbdbd;
        margin: 0;
        cursor: pointer;
        background: #333;
        color: #cecece;

    }

    .cart-item-quantity span{
        width: 100%;
        font-size: 1.2rem;
    }

    .cart-item-total-value{
        font-size: 1.2rem;
    }

    .cart-total-container{
        width: 250px;
        height: 125px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 1px solid #cecece;
        background-color: #ececec;

        transform: translateX(-1px);
        border-left: none;
        box-shadow: 0 0 1px 1px #ececec;

        & .price{
            font-size: 1.2rem;
        }

        & button{
            width: 70%;
            padding: 10px 5px;
            margin-top: 10px;
            background: #333;
            color: #cecece;
            font-size: 1.05rem;
            cursor: pointer;
        }
    }

    #empty-cart-container{
        text-align: center;
    }

    #empty-cart{
        margin-bottom: 25px;
    }

    #empty-cart-link{
            padding: 15px 25px;
            background-color: #333;
            color: #cecece;
            border-radius: 10px;
        }

`

export default Cart;