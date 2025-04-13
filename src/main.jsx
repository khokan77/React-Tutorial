import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./components/MealDB/HomePage.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <HomePage/> */}
    <App2/>
  </StrictMode>
);
