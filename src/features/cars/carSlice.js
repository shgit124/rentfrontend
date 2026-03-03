import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/cars";

// GET
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// ADD
export const addCar = createAsyncThunk("cars/addCar", async (car) => {
  const response = await axios.post(API_URL, car);
  return response.data;
});

// UPDATE
export const updateCar = createAsyncThunk("cars/updateCar", async (car) => {
  const response = await axios.put(`${API_URL}/${car.id}`, car);
  return response.data;
});

// DELETE
export const deleteCar = createAsyncThunk("cars/deleteCar", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      })
      // .addCase(updateCar.fulfilled, (state, action) => {
      //   const index = state.cars.findIndex(
      //     (car) => car.id === action.payload.id
      //   );
      //   state.cars[index] = action.payload;
      // })

      .addCase(updateCar.fulfilled, (state, action) => {
  const index = state.cars.findIndex(
    (car) => car.id === action.payload.id
  );

  if (index !== -1) {
    state.cars[index] = action.payload;
  }
})
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter(
          (car) => car.id !== action.payload
        );
      });
  },
});

export default carSlice.reducer;