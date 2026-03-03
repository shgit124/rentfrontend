import { createSlice } from "@reduxjs/toolkit";

// Load cars from localStorage or use default data
const loadCarsFromStorage = () => {
  try {
    const storedCars = localStorage.getItem('cars');
    return storedCars ? JSON.parse(storedCars) : [
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
    ];
  } catch (error) {
    console.error('Error loading cars from localStorage:', error);
    return [];
  }
};

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: loadCarsFromStorage(),
    loading: false,
  },
  reducers: {
    addCar: (state, action) => {
      const newCar = {
        ...action.payload,
        id: Date.now(), // Simple ID generation
      };
      state.cars.push(newCar);
      // Save to localStorage
      localStorage.setItem('cars', JSON.stringify(state.cars));
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      if (index !== -1) {
        state.cars[index] = action.payload;
        // Save to localStorage
        localStorage.setItem('cars', JSON.stringify(state.cars));
      }
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(
        (car) => car.id !== action.payload
      );
      // Save to localStorage
      localStorage.setItem('cars', JSON.stringify(state.cars));
    },
    setCars: (state, action) => {
      state.cars = action.payload;
      // Save to localStorage
      localStorage.setItem('cars', JSON.stringify(state.cars));
    }
  },
});

export const { addCar, updateCar, deleteCar, setCars } = carSlice.actions;
export default carSlice.reducer;
