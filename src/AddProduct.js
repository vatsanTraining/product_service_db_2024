import React,{useState} from "react";

const AddProduct = () => {

    const [product,setProduct] =useState({})
 const handleSubmit = (event) => {
    console.log("handle submit called");
    console.log(product)
  };
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    console.log("handle change called");
    setProduct({...product,[key]:value})
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input type="text" name="productName" onChange={handleChange}/>

      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddProduct;
