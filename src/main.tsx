import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>,
  },
]);

const app = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
