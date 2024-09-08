'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeFromCart } from '@/app/redux/cartSlice';
import Cart from '@/app/Components/Cart.Styled';
import Header from '../Components/Header.styled';
import Footer from '../Components/Footer.styled';
import Link from 'next/link';

export default function CartPage() {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState([]);

    useEffect(() => {
        if (cart.length > 0) {
            setQuantities(cart.map(item => item.quantity));
        }
    }, [cart]);

    const increaseHandler = (index) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities[index] += 1;
            return updatedQuantities;
        });
    };

    const decreaseHandler = (index) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = [...prevQuantities];
            if (updatedQuantities[index] > 1) {
                updatedQuantities[index] -= 1;
            } else {
                dispatch(removeFromCart(cart[index]));
            }
            return updatedQuantities;
        });
    };

    return (
        <div className='flex-container'>
            <Header />
            <Cart>
            {cart.length === 0 ? (
                        <div id='empty-cart-container'>  
                            <h1 id='empty-cart'>Your cart is empty</h1>
                            <Link
                            href={'/'}
                            id='empty-cart-link'
                            >Keep Browsing</Link>
                        </div>
                    ) : (
                        <>
                        <div className='Cart'>
                    <h1 id='cart-header'>Hello User</h1>
                    <h2 id='cart-subheader'>Your cart contains {cart.length} product(s).</h2>
                    <div className='cart-container'>
                        <ul id='cart-item-container'>
                            {cart.map((item, index) => (
                                <li key={item.id} className='cart-item'>
                                    <div className='img-specs-wrapper'>
                                        <div className='item-img-container'>
                                            <img
                                                src={item.image}
                                                className='cart-img img'
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className='cart-item-specs'>
                                            <h3 className='cart-item-spec'>Product: {item.title.substr(0, 50)}</h3>
                                            <h4 className='cart-item-spec'>Model: {item.model}</h4>
                                            <h5 className='cart-item-spec'>Brand: {item.brand}</h5>
                                        </div>
                                    </div>
                                    <div className='cart-item-info-container'>
                                        <p className='cart-item-unit-price cart-item-info nowrap'>Unit Price: <span className='price'>${item.price}</span></p>
                                        <div className='cart-item-quantity nowrap'>
                                            <button
                                                type="button"
                                                className='quantity-decrease'
                                                onClick={() => decreaseHandler(index)}
                                            >
                                                -
                                            </button>
                                            <span id='quantity'>{quantities[index]}</span>
                                            <button
                                                type="button"
                                                className="quantity-increase"
                                                onClick={() => increaseHandler(index)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <h5 className="cart-item-total-value cart-item-info">Total: <span className='price'>${quantities[index] * item.price}</span></h5>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='cart-total-container'>
                            <span className='arial'>Total Cart Value: <span className='price'>${cart.reduce((total, item, index) => total + item.price * quantities[index], 0)}</span></span>
                            <button type='button' id='proceedToPayment'>Proceed To Payment</button>
                        </div>
                    </div>
                </div>
                        </>
                    )}
            </Cart>
            <Footer />
        </div>
    );
}
