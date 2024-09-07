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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 30px;
    border-left: 1px solid #cecece;
}

.product-info-title{
    font-size: 1.2rem;
    margin: 10px 0 0;
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
    justify-content: center;
    margin: 10px;
}

#product-info-price-container{

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
`

export default ProductInfoStyleProvider;