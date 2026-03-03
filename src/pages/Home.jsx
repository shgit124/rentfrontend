import { useState } from "react";
import CarForm from "../components/CarForm";
import CarList from "../components/CarList";
import Navbar from "../components/Navbar";

function Home() {
  const [editCar, setEditCar] = useState(null);

  return (
     <>
      <Navbar />
      <div className="min-h-screen bg-[url('/car-bg.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4">
        
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Live Life Like a King. Drive Branded.
          </h1>

          {/* Uncomment when ready */}
          
         {/* <CarForm editCar={editCar} setEditCar={setEditCar} />
         <CarList setEditCar={setEditCar} /> */}
         
        </div>

      </div>
    </>
  
  );
}

export default Home;


