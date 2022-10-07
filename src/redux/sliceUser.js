import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const sliceUser = createSlice({
  name: "user",
  initialState: {
    user: userInfo,
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = sliceUser.actions;
export default sliceUser.reducer;
