import { configureStore } from "@reduxjs/toolkit";
import { Productslice } from "./ProducSlice";
import { CartSlice } from "./Cart.Slice";

export const store = configureStore({
    reducer:{
        [Productslice.name]:Productslice.reducer,
        [CartSlice.name]:CartSlice.reducer,
    }
})