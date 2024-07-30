import ShowProduct from "./ShowProduct";
import { useRoutes } from "react-router-dom";
import Content from "./Content";
import ShowOffices from "./ShowOffices";
import AddProduct from "./AddProduct";
import Home from "./Home";
import TableContent from "./TableContent";
import ContextWrapper from "./ContextWrapper";
import OfficeContext from "./OfficeContext";
import ReduxCompOne from "./ReduxCompOne";
export const RouteConfigs = () => {
  let elements = useRoutes([
    { path: "/", element: <AddProduct /> },
    { path: "/products", element: <ShowProduct /> },
    { path: "/offices", element: <OfficeContext /> },
    { path: "/home", element: <Home /> },
    { path: "/orders", element: <TableContent /> },
    { path: "/context", element: <ContextWrapper /> },
    { path: "/redux", element: <ReduxCompOne /> }
  ]);

  return elements;
};
