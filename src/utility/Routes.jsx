import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/Projects/ProjectDetails";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
        loader: async ({ params }) => {
          return params.id;
        },
      },
    ],
  },
]);

export default router;
