import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import {favsSlice} from "./slices/favsSlice";
import {selectedProductSlice} from "./slices/selectedProductSlice";
import {filterSlice} from "./slices/filterSlice";
import {cartSlice} from "./slices/cartSlice";


const store = configureStore({
    reducer: {
      api: apiSlice.reducer,
      favs: favsSlice.reducer,
      selectedProduct: selectedProductSlice.reducer,
      filter: filterSlice.reducer,
      cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
  });

export default store