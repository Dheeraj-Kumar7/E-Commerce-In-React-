import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Products from "./Components/Products/Products.jsx";
import Category from "./Components/Category/Category.jsx";
import Home from "./Components/Home/Home.jsx";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route, 
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category/>}/>
        <Route path="product" element={<Products />} />
      </Route>
      
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
