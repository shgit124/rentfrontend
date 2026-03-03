// import { useState } from "react";
// import CarForm from "./components/CarForm";
// import CarList from "./components/CarList";

// function App() {
//   const [editCar, setEditCar] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-200 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6">🚗 Car Rental CRUD App</h1>
//       <div className="w-full max-w-2xl">
//         <CarForm editCar={editCar} setEditCar={setEditCar} />
//         <CarList setEditCar={setEditCar} />
//       </div>
//     </div>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarList from "./components/CarList";
import About from "./pages/About";
import CarForm from "./components/CarForm";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/carlist" element={<CarList />} />
            <Route path="/CarForm" element={<CarForm />} />
             <Route path="/Update" element={<Update />} />

        {/* You can add more pages later like About, Dashboard, etc. */}
      </Routes>
    </Router>
  );
}

export default App;


// import Navbar from "./components/Navbar";


// function App() {
//   return (
  
     
//       <Routes>
//          <Navbar />
//         <Route path="/" element={<Home />} />
//       </Routes>
   
//   );
// }