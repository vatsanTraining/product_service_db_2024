import React, { useState, useEffect, createElement } from "react";
import { useData } from "./useData";
import axios from "axios";
import Table from "./Table";
import TableContent from "./TableContent";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ShowProduct = () => {
  //   const { data } = useData("http://localhost:5550/api/v1/products");

  const [data, setData] = useState([]);

  const colDefs= [{ field: "productId" }, { field: "productName" }, { field: "ratePerUnit" }];


  const fetchData = async () => {
    const response = await axios.get("http://localhost:5550/api/v1/products");

    setData(response.data);
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 800, width: 600 }}>
            <AgGridReact rowData={data} columnDefs={colDefs} />

    </div>
  );
};

export default ShowProduct;
