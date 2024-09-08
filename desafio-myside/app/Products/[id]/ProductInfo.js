'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';
import ProductInfoStyleProvider from '@/app/Components/ProductInfoStyleProvider';
import { useState } from 'react';

export default function ProductInfo({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const [quantity, setQuantity] = useState(1);
    const [buttonText, setButtonText] = useState('Add to cart');

    const handleAddToCart = () => {
        const existingProduct = cart.find(item => item.id === product.product.id);
        const newQuantity = existingProduct ? existingProduct.quantity + quantity : quantity;

        dispatch(addToCart({ product: product.product, quantity: newQuantity }));

        setButtonText(`${newQuantity} added!`);
    };

    return (
        <ProductInfoStyleProvider>
            <div className='product-image-container'>
                <img src={product.product.image} alt={product.product.title} />
            </div>
            <div className='product-info-container'>
                <h2>Category: <span style={{textTransform: 'capitalize'}}>{product.product.category}</span></h2>
                <h3 className='product-info-title'>{product.product.title}</h3>
                <p className='product-info-description'>{product.product.description}</p>
                <div id='addToCartContainer'>
                    <span id='product-info-price' className='price nowrap'>Price: ${product.product.price}</span>
                    <button id="addToCartButton" type='button' onClick={handleAddToCart}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </ProductInfoStyleProvider>
    );
}
