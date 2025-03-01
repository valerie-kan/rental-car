import { createSlice } from "@reduxjs/toolkit";
// import localStorage from "redux-persist/es/storage";

const savedCars = () => {
  const savedFavourites = localStorage.getItem("favourites");
  return savedFavourites ? JSON.parse(savedFavourites) : [];
};

const initialState = {
  favourites: savedCars(),
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      // console.log(action.payload);
      if (!state.favourites.some((item) => item.id === action.payload.id)) {
        state.favourites.push(action.payload);
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
      }
    },
    removeFavourite: (state, action) => {
      // console.log(action.payload);
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export default favouritesSlice.reducer;
export const { addFavourite, removeFavourite } = favouritesSlice.actions;
