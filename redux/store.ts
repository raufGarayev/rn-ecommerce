import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";


const store = configureStore({
    reducer: {
      api: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
  });

export default store