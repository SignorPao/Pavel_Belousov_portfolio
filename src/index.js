import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import browser router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import About from "./pages/About";

// import translation
import "./i18n";

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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
