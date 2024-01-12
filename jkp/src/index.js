import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mlbb from "./pages/Mlbb";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mlbb />,
      },
      // {
      //   path: "/mlbb",
      //   element: <Mlbb />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
