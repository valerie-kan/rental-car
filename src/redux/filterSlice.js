// import { createSlice } from "@reduxjs/toolkit";

// import { getBrands, getCars } from "./operations";

// const initialState = {
//   filters: {
//     brand: "",
//     rentalPrice: "",
//     minMileage: "",
//     maxMileage: "",
//   },
//   error: null,
//   isLoading: false,
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCars.pending, (state) => {
//         state.isLoading = true;
//         state.error = false;
//       })
//       .addCase(getCars.fulfilled, (state, action) => {
//         // console.log(action.payload);

//         state.isLoading = false;
//         state.error = false;
//         state.cars = action.payload;
//       })
//       .addCase(getCars.rejected, (state, action) => {
//         // console.log(action.payload);
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(getBrands.pending, (state) => {
//         state.isLoading = true;
//         state.error = false;
//       })
//       .addCase(getBrands.fulfilled, (state, action) => {
//         // console.log(action.payload);

//         state.isLoading = false;
//         state.error = false;
//         state.brands = action.payload;
//       })
//       .addCase(getBrands.rejected, (state, action) => {
//         // console.log(action.payload);
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//     // .addCase(getCarById.pending, (state) => {
//     //   state.isLoading = true;
//     //   state.error = false;
//     // })
//     // .addCase(getCarById.fulfilled, (state, action) => {
//     //   // console.log(action.payload);

//     //   state.isLoading = false;
//     //   state.error = false;
//     //   state.carDetails = action.payload;
//     // })
//     // .addCase(getCarById.rejected, (state, action) => {
//     //   // console.log(action.payload);
//     //   state.isLoading = false;
//     //   state.error = action.payload;
//     // });
//   },
// });

// export const filtersReducer = filtersSlice.reducer;
