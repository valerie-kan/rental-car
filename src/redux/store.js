import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "./favouritesSlice";
import { carsReducer } from "./carsSlice";
// import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favourites: favouritesReducer,
    // filters: filtersReducer,
  },
});
