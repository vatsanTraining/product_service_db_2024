import ShowProduct from "./ShowProduct";
import { useRoutes } from "react-router-dom";
import Content from "./Content";
import AddProduct from "./AddProduct";
export const RouteConfigs = () => {
  let elements = useRoutes([
    { path: "/", element: <AddProduct /> },
    { path: "/products", element: <ShowProduct /> },
  ]);

  return elements;
};
