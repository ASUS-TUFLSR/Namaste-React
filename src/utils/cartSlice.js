import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        //modifying the state
        //redux toolikt uses immer.js(library ) behind the scene's
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            //Redux toolkit says either Mutate the existing state or return new State
            state.items.length = 0;
            // state.items.length = 0 || we can do return {items : []}
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;