import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (filters = {}, thunkAPI) => {
    try {
      const params = new URLSearchParams(filters);
      const response = await axios.get(`/cars?${params}`);
      // console.log(response.data);
      return response.data.cars;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  "cars/getBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
