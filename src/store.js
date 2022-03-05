import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from './Slice/countriesSlice'

export const store = configureStore({
  reducer: { countries: countriesSlice },
});
