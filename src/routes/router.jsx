import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[{
      index:true,
      Component:Home
    }]
  },
]);
