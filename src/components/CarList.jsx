import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, deleteCar } from "../features/cars/carSlice";

const CarList = ({ setEditCar }) => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  console.log("Cars from store:", cars);

  useEffect(() => {
    // Try to fetch from API, but don't fail if it doesn't work
    dispatch(fetchCars()).catch(err => {
      console.log("API fetch failed, using mock data");
    });
  }, [dispatch]);

  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No cars available</p>
      </div>
    );
  }

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id} className="bg-gray-100 p-4 mb-3 rounded flex justify-between items-center">
          <div>
            <h2 className="font-bold">
         {car.brand} {car.model} ({car.year})
            </h2>
        <p>${car.pricePerDay} / day</p>
            <p className={`font-semibold ${car.status === "Available"? "text-green-600" : "text-red-600" }`}>
              {car.status}
            </p>
          </div>

          <div>

            <button
              onClick={() => setEditCar(car)}

              className="bg-yellow-400 px-3 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteCar(car.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
