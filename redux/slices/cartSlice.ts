import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const { id, title, image, price } = action.payload;
        const existingProduct = state.find((product) => product.id === id);
        
        if (existingProduct) {
          existingProduct.amount += 1;
        } else {
          state.push({ id, title, image, price, amount: 1 });
        }
      },
      removeFromCart: (state, action) => {
        const itemId = action.payload.id;
        return state.filter((item) => item.id !== itemId);
      },
      incCartAmount: (state, action) => {
        const id = action.payload;
        const existingProduct = state.find((product) => product.id === id);
        
        if (existingProduct) {
          if (existingProduct.amount) {
            existingProduct.amount += 1;
          } else {
            existingProduct.amount = 1;
          }
        }
      },
      decCartAmount: (state, action) => {
        const id = action.payload;
        const existingProduct = state.find((product) => product.id === id);
        
        if (existingProduct && existingProduct.amount) {
          existingProduct.amount -= 1;
        }

        if (existingProduct.amount === 0) {
            // Remove the item from the cart if amount becomes zero
            const index = state.findIndex((product) => product.id === id);
            state.splice(index, 1);
          }
      },
    },
});
  

export const { addToCart, removeFromCart, incCartAmount, decCartAmount } = cartSlice.actions;
export default cartSlice.reducer;
  