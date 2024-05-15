import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";

const router = createBrowserRouter(Router);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
