// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
 // Redux store
import App from "./App";               // App with Router
import "./index.css";
import { store } from "./App/store";                  // Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);