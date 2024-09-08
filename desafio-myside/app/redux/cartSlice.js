import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(item => item.id === action.payload.product.id);
            if (existingProduct) {
                // Se o produto já está no carrinho, incrementar a quantidade
                existingProduct.quantity = action.payload.quantity;
            } else {
                // Se o produto é novo, adicionar ao carrinho
                state.cart.push({ ...action.payload.product, quantity: action.payload.quantity });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
