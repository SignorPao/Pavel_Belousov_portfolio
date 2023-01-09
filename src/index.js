import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import browser router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
