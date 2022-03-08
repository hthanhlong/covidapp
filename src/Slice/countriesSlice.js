import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sortbyText } from "utils";
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
  reducers: {
    sortHeighest: (state, action) => {
      // eslint-disable-next-line default-case
      switch (action.payload) {
        case 0:
          state.countries.sort((a, b) => {
            return a.Country < b.Country ? -1 : 1;
          });
          break;
        // eslint-disable-next-line no-duplicate-case
        case 1:
          state.countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
          break;
        // eslint-disable-next-line no-fallthrough
        case 2:
          state.countries.sort((a, b) => b.NewDeaths - a.NewDeaths);
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload.Countries;
      state.global = action.payload.Global;
      state.date = action.payload.Date && action.payload.Date.split("T")[0];
    });
  },
});

export const { sortHeighest } = countriesSlice.actions;

export default countriesSlice.reducer;
