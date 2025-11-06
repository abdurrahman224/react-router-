import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About/About.jsx";
import Products from "./components/Products/Products.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Cartsc from "./components/Carts/Carts.jsx";
import Usear from "./components/Usear/Usear.jsx";
import Details from "./components/Details/Details.jsx";
import Posts from "./components/Posts/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "cart",
        element: <Cartsc></Cartsc>,
      },
      {
        path: "usear",
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Usear></Usear>,
      },
    {
      path: "users/:id",
      loader : ({params })=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      element: <Details></Details>


    },{
      path: "posts",
      loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts></Posts>
    }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
