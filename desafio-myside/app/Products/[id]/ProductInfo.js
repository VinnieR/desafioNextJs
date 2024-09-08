'use client';

import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';
import ProductInfoStyleProvider from '@/app/Components/ProductInfoStyleProvider';

export default function ProductInfo({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product.product));
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
                        <span id='product-info-price' className='price'>Price: ${product.product.price}</span>
                        <button id="addToCartButton" type='button' onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </ProductInfoStyleProvider>
    );
}
