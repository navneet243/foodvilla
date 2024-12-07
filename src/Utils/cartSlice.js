import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice+= ((action.payload.price) ? action.payload.price/100 : action.payload.defaultPrice/100);
        },
        removeItem:(state, action) => {
            state.items= state.items.filter((item) => item.id!==action.payload.id);
            state.totalPrice-= ((action.payload.price) ? action.payload.price/100 : action.payload.defaultPrice/100);
            // console.log(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer