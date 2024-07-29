import React from "react";
import { useData } from "./useData";

const ShowProduct = () => {
  const { data } = useData("http://localhost:5550/api/v1/products");
  return <div>{data}</div>;
};

export default ShowProduct;
