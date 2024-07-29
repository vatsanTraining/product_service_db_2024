import React, { useState, useEffect } from "react";
import { useData } from "./useData";
import axios from "axios";

const ShowProduct = () => {
  //   const { data } = useData("http://localhost:5550/api/v1/products");

  const [data, setData] = useState([]);

  const handleData = (eachElement, idx) => {
    return(
      <div key={idx}>
        <p>{eachElement.productName}</p>
        <p>{eachElement.ratePerUnit}</p>
      </div>
    );
  };

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5550/api/v1/products");

    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {data.map(handleData)}
    </div>
  );
};

export default ShowProduct;
