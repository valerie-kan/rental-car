import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async ({ filters = {}, page = 1, limit = 8 }, thunkAPI) => {
    try {
      const params = new URLSearchParams({ ...filters, page, limit });
      const response = await axios.get(`/cars?${params}`);
      // console.log(response.data);
      return {
        cars: response.data.cars,
        totalCars: response.data.totalCars,
        page: response.data.page,
        totalPages: response.data.totalPages,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      // console.log("getCarsById:", response.data);
      return response.data;
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
