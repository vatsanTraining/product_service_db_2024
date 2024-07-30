import ShowProduct from "./ShowProduct";
import { useRoutes } from "react-router-dom";
import Content from "./Content";
import ShowOffices from "./ShowOffices";
import AddProduct from "./AddProduct";
import Home from "./Home";
import TableContent from "./TableContent";
export const RouteConfigs = () => {
  let elements = useRoutes([
    { path: "/", element: <AddProduct /> },
    { path: "/products", element: <ShowProduct /> },
    { path: "/offices", element: <ShowOffices /> },
    { path: "/home", element: <Home /> },
    { path: "/orders", element: <TableContent /> },
  ]);

  return elements;
};
