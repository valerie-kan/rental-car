import { createSlice } from "@reduxjs/toolkit";

import { getBrands } from "./operations";

const initialState = {
  brandsList: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
  error: null,
  isLoading: false,
};

const filterSlice = createSlice({
  name: "filters",
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
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.brandsList = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
