import { createSlice } from "@reduxjs/toolkit";

import { getBrands, getCarById, getCars } from "./operations";

const initialState = {
  cars: [],
  carDetails: null,
  brands: [],
  filters: {
    brand: [],
    rentalPrice: [],
    minMileage: "",
    maxMileage: "",
  },
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
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
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
      })
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetFilters, resetCars } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
