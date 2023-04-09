import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";
import authSlices from "./slices/authSlice"

const Store = configureStore({
    reducer: {
        cart: cartSlices,
        auth: authSlices,
    },
});

export default Store;


