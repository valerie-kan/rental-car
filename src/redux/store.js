import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "./favourites/favouritesSlice";
import carsReducer from "./cars/carsSlice";
import filterReducer from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favourites: favouritesReducer,
    filters: filterReducer,
  },
});
