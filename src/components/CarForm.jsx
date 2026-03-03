import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCar, updateCar } from "../features/cars/carSlice";

const CarForm = ({ editCar, setEditCar }) => {
  const dispatch = useDispatch();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    status: "Available",
  });

  useEffect(() => {
    if (editCar) setCar(editCar);
  }, [editCar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editCar) {
      dispatch(updateCar(car));
      setEditCar(null);
    } else {
      dispatch(addCar(car));
    }

    setCar({
      brand: "",
      model: "",
      year: "",
      pricePerDay: "",
      status: "Available",
    });
  };

  return (
   <div
  className="min-h-screen flex items-center justify-center px-4 
             bg-[url('https://i.ytimg.com/vi/zEr-mm8OSGo/hq720.jpg')] 
             bg-no-repeat bg-cover bg-center"
>
   
    
<form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <input
        className="border p-2 w-full mb-2 " 
        placeholder="Brand"
        value={car.brand}
        onChange={(e) => setCar({ ...car, brand: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Model"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      <input
        type="number"
        className="border p-2 w-full mb-2"
        placeholder="Year"
        value={car.year}
        onChange={(e) => setCar({ ...car, year: e.target.value })}
      />
      <input
        type="number"
        className="border p-2 w-full mb-2"
        placeholder="Price Per Day"
        value={car.pricePerDay}
        onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
      />

      <select
        className="border p-2 w-full mb-2"
        value={car.status}
        onChange={(e) => setCar({ ...car, status: e.target.value })}
      >
        <option>Available</option>
        <option>Rented</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {editCar ? "Update Car" : "Add Car"}
      </button>
    </form>
      
    </div>
    
  );
};

export default CarForm;