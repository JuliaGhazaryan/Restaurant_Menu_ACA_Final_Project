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
    addCount(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.qty += 1;
        }
        return item;
      });
    },
    removeCount(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.qty -= 1;
        }
        return item;
      });
    },
    filterCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  changeCartShow,
  setCartItems,
  addCount,
  filterCart,
  removeCount,
} = sliceCart.actions;
export default sliceCart.reducer;
