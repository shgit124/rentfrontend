import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/cars";

// GET
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [
      {
        id: 1,
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        pricePerDay: 50,
        status: "Available"
      },
      {
        id: 2,
        brand: "Honda",
        model: "Accord",
        year: 2021,
        pricePerDay: 45,
        status: "Available"
      },
      {
        id: 3,
        brand: "BMW",
        model: "X5",
        year: 2023,
        pricePerDay: 120,
        status: "Rented"
      }
    ],
    loading: false,
  },
  reducers: {
    addCar: (state, action) => {
      const newCar = {
        ...action.payload,
        id: Date.now(), // Simple ID generation
      };
      state.cars.push(newCar);
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(
        (car) => car.id !== action.payload
      );
    },
    setCars: (state, action) => {
      state.cars = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      });
  },
});

export const { addCar, updateCar, deleteCar, setCars } = carSlice.actions;

export default carSlice.reducer;