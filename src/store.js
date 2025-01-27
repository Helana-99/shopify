import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartslice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
