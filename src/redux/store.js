import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "./favouritesSlice";
import { carsReducer } from "./carsSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favourites: favouritesReducer,
  },
});
