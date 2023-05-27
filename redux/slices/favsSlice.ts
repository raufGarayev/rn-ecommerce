import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

export const favsSlice = createSlice({
name: 'favs',
initialState,
reducers: {
    setFavs: (state, action) => {
        return [...state, action.payload];
    },
    removeFavs: (state, action) => {
        const itemId = action.payload.id;
        return state.filter((item) => item.id !== itemId);
    },
},
});

export const { setFavs, removeFavs } = favsSlice.actions;
export default favsSlice.reducer;
  