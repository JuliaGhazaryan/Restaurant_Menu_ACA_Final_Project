import { configureStore } from '@reduxjs/toolkit'
import foodSlice from './foodSlice'
import sliceCart from './sliceCart'
import sliceUser from './sliceUser'


export const store = configureStore({
  reducer: {
    User : sliceUser,
    Food : foodSlice,
    Cart : sliceCart
  }
})