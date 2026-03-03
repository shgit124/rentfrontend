// import { useState } from "react";
// import CarForm from "../components/CarForm";
// import CarList from "../components/CarList";
// // import Navbar from "../components/Navbar";

// function Update() {
//   const [editCar, setEditCar] = useState(null);

//   return (
//      <>
//       {/* <Navbar /> */}
//          <div
//   className="w-full flex items-center justify-center px-4 
           
//              bg-no-repeat bg-cover bg-center"
// >
//       {/* <div className="min-h-screen  bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4"> */}
        
//         <div className="bg-gray-400 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-2xl">
//           <h1 className="text-3xl font-bold mb-6 text-center">
//         Branded 🚗 Car Rental CRUD App
//           </h1>

//           {/* Uncomment when ready */}
          
//          <CarForm editCar={editCar} setEditCar={setEditCar} />
//          <CarList setEditCar={setEditCar} /> 
         
//         </div>

//       </div>
//     </>
  
//   );
// }

// export default Update;



// import { useState } from "react";
// import CarForm from "../components/CarForm";
// import CarList from "../components/CarList";

// function Update() {
//   const [editCar, setEditCar] = useState(null);

//   return (

//     <div className="min-h-screen w-screen flex items-center justify-center px-4 bg-gray-900">
   
      
//       <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-full max-w-2xl">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Branded 🚗 Car Rental CRUD App
//         </h1>

//         <CarForm editCar={editCar} setEditCar={setEditCar} />
//         <CarList setEditCar={setEditCar} />

//       </div>

//     </div>
//   );
// }

// export default Update;  

import { useState } from "react";
import CarForm from "../components/CarForm";
import CarList from "../components/CarList";

function Update() {
  const [editCar, setEditCar] = useState(null);

  return (
    <div className="min-h-screen w-screen bg-gray-900 flex flex-col items-center px-4 py-8">
      
      {/* Hero / Header */}
      <div className="text-center mb-8">
        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Live Life Like a <span className="text-yellow-400">King</span> 🚗
        </h1> */}
        <p className="text-gray-300 mt-2 md:text-lg">
       Add And Update Car
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        
        {/* Left Column: CarForm */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
          <CarForm editCar={editCar} setEditCar={setEditCar} />
        </div>

        {/* Right Column: CarList */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow max-h-[70vh] overflow-y-auto">
          <CarList setEditCar={setEditCar} />
        </div>

      </div>

    </div>
  );
}

export default Update;