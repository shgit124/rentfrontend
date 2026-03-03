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
     cars: [],
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