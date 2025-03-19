import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getBrands = createAsyncThunk(
  "filters/getBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
