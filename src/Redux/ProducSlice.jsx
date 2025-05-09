import { createSlice } from "@reduxjs/toolkit";

export const Productslice = createSlice({
  name: "Productslice",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const {addProducts} = Productslice.actions;
export default Productslice.reducer