import { createSlice } from "@reduxjs/toolkit";

import { getCarById, getCars } from "./operations";

const initialState = {
  cars: [],
  carDetails: null,
  page: 1,
  limit: 10,
  totalPages: 1,
  error: null,
  isLoading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.cars = [];
      state.page = 1;
      state.totalPages = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.cars = [...state.cars, ...action.payload.cars];
        state.page = Number(action.payload.page);
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarById.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.carDetails = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars } = carsSlice.actions;

export default carsSlice.reducer;
