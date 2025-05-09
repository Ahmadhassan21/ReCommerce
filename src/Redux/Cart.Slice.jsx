import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
  reducers: {
    addProduct(state, action) {
      const filtercard = state.cart.find(
        (cur, i) => cur.id === action.payload.id
      );
      if (filtercard) {
        state.cart = state.cart.map((cur) => {
          if (cur.id === action.payload.id) {
            return {
              ...cur,
              quantity: cur.quantity + 1,
            };
          }
          return cur;
        });
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("Item Quantity increase");
        return;
      }
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.success("item Added into Cart");
    },
    removeCart(state,action) {
        state.cart = state.cart.filter((cur) => cur.id !== action.payload);
        toast.success("Item Removed");
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQty(state, action) {
      const existdata = state.cart.find((cur) => cur.id === action.payload);
      if (existdata) {
        state.cart = state.cart.map((cur, i) => {
          if (cur.id === action.payload) {
            return {
              ...cur,
              quantity: cur.quantity + 1,
            };
          }
          return cur;
        });
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("Quantity Increase");
      } else {
        toast.error("Product not Exist");
      }
    },
    decrementQty(state, action) {
        const existdata = state.cart.find((cur) => cur.id === action.payload);
        
        if (existdata.quantity <= 1) {
          state.cart = state.cart.filter((cur) => cur.id !== action.payload);
          toast.success("Item Removed");
        } else {
          if (existdata) {
            state.cart = state.cart.map((cur) => {
              if (cur.id === action.payload) {
                return {
                  ...cur,
                  quantity: cur.quantity - 1,
                };
              }
              return cur;
            });
            toast.success("Quantity Decreased");
          }
        }
      
        
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }




  },
});
export const { addProduct, incrementQty, decrementQty, removeCart } =
  CartSlice.actions;

export const cartslicepath = (store) => store.CartSlice.cart;
