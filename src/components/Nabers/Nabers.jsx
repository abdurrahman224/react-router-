import React from "react";
import { Link } from "react-router-dom";

const Nabers = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/products",
      name: "Products",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 5,
      path: "/cart",
      name: "Cart",
    },
    {
      id: 6,
      path: "/usear",
      name: "Usear",
    },
    {
      id: 7,
      path: "/posts",
      name: "Posts",
    },
  ];
  return (
    <div className="flex  gap-10 px-5 py-4 list-none">
      {routes.map((route) => (
        <li className="hover:text-amber-400" key={route.id}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Nabers;
