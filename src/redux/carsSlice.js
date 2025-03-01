import { createSlice } from "@reduxjs/toolkit";

import { getBrands, getCars } from "./operations";

const initialState = {
  cars: [],
  brands: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.isLoading = false;
        state.error = false;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.isLoading = false;
        state.error = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetFilters } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
