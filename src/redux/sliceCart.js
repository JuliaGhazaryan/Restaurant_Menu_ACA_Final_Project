import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../utils/fetchLocalStorageData";

const cartInfo = fetchCart();

const sliceCart = createSlice({
  name: "Cart",
  initialState: {
    cartShow: false,
    cartItems: cartInfo,
  },

  reducers: {
    changeCartShow(state) {
      state.cartShow = !state.cartShow;
    },

    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { changeCartShow, setCartItems } = sliceCart.actions;
export default sliceCart.reducer;
