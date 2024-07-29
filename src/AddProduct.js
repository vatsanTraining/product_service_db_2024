import React, { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [message, setessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5550/api/v1/products", product)
      .then((response) => console.log("record posted"));
  };
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    console.log("handle change called");
    setProduct({ ...product, [key]: value });
    setessage("Record Added");
  };
  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: "#0000ff" }}>{message}</p>
      <label>Product Id</label>
      <input type="text" name="productId" onChange={handleChange} />

      <label>Product Name</label>
      <input type="text" name="productName" onChange={handleChange} />

      <label>Rate Per Unit</label>
      <input type="text" name="ratePerUnit" onChange={handleChange} />

      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddProduct;
