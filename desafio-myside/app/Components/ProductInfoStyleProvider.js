"use client"

import styled from "styled-components";

const ProductInfoStyleProvider = styled.div`
display: flex;
align-items: center;
width: 75%;
height: 100%;
border: 1px solid #bfbfbf;
box-shadow: 0 0 1px 1px #ececec;

.product-image-container{
    height: 500px;
}

img{
    width: auto;
    height: 100%;
}

.product-info-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 30px;
    border-left: 1px solid #cecece;
}

.product-info-title{
    font-size: 1.2rem;
    margin: 20px 0 10px;
}

.product-info-description{
    line-height: 1.5;
}

.product-info-specs{
    width: 100%;
    justify-content: center;
    margin: 10px 0;
}

.spec-info{
    font-size: 1rem;
    margin: 15px 0;
}

#addToCartContainer{
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: 15px;
    width: 50%;
    height: 100%;
    font-size: 1.3rem;
    font-weight: bold;
}

#product-info-price{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: bold;
}


#addToCartButton{
    width: 100%;
    height: 50px;
    font-size: 1.1rem;
    background: #333;
    color: #cecece;
    border-radius: 10px;
    cursor: pointer;
}

@media (max-width: 1200px){
    flex-direction: column;
    margin: 20px 0;
    width: 80%;

    .product-info-description{
        margin: 20px 0;
    }

    .product-image-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    img{
        width: auto;
        height: 100%;
    }
}

@media (max-width: 800px){

    width: 80%;

    .product-info-description{
        margin: 20px 0 10px;
    }

    .product-image-container{
        height: fit-content;
}

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

#addToCartContainer{
    width: 100%;
}
}

@media (max-width: 400px){
    width: 95%;
}
`

export default ProductInfoStyleProvider;