import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find((data) => data.id === item.id);

            if(existing){
                existing.quantity += 1;
                existing.totalPrice += item.price;
            }
            else{
                state.items.push({
                    ...item,
                    quantity: 1,
                    totalPrice: item.price
                });
            }

            state.totalQuantity += 1;
            state.totalPrice += item.price;

        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existing = state.items.find((data) => data.id === id);

            if (!existing) return;

            state.totalQuantity -= 1;
            state.totalPrice -= existing.price;

            if (existing.quantity === 1){
                state.items = state.items.filter((data) => data.id !== id)
            }
            else{
                existing.quantity -= 1;
                existing.totalPrice -= existing.price;
            }

        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

 