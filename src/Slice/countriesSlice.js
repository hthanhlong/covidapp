import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { countries } from "../api/countriesApi";

export const fetchCountries = createAsyncThunk("countries", async () => {
  const response = await countries.getAll();
  return response.data;
});

const initialState = {
  date: "",
  global: {},
  countries: [],
};

export const countriesSlice = createSlice({
  name: "list country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload.Countries;
      state.global = action.payload.Global;
      state.date = action.payload.Date.split("T")[0];
    });
  },
});

export default countriesSlice.reducer;
