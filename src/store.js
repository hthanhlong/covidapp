import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "Slice/ModalSlice";
import countriesSlice from "./Slice/countriesSlice";

export const store = configureStore({
  reducer: { countries: countriesSlice, modalDetail: modalSlice },
});
