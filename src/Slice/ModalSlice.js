import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { countries } from "api/countriesApi";
import { customAxios } from "api/customAxios";

export const fetchDetailCountry = createAsyncThunk(
  "detailCountry",
  async (code) => {
    const response = await customAxios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    return response.data;
  }
);

export const fetchDetailDataDaily = createAsyncThunk(
  "get data daily",
  async (slug) => {
    const response = await countries.getDetailDailyData(slug);
    return response.data;
  }
);

const initialState = {
  isFetch: false,
  isShow: false,
  detailCountry: null,
  dataDaily: null,
};

export const modalSlice = createSlice({
  name: "detail country",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isShow = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailCountry.pending, (state, action) => {
        state.isFetch = true;
      })
      .addCase(fetchDetailCountry.fulfilled, (state, action) => {
        state.isShow = true;
        state.isFetch = false;
        state.detailCountry = action.payload[0];
      })
      .addCase(fetchDetailCountry.rejected, (state, action) => {
      })
      .addCase(fetchDetailDataDaily.fulfilled, (state, action) => {
        state.dataDaily = action.payload;
      });
  },
});

export const { closeModal } = modalSlice.actions;

export default modalSlice.reducer;
