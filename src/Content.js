import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Content = ({ element, offers }) => {
  const { productName, ratePerUnit } = element;

  const createElement = (element, idx) => {
    return <li key={idx}>{element}</li>;
  };
  return (
    <div>
      <Header majheading={"Siva Stores"} minheading={"Nashik"}></Header>

      <p>{productName}</p>
      <p>{ratePerUnit}</p>

      <ul>{offers.map(createElement)}</ul>
      <Footer></Footer>
    </div>
  );
};

export default Content;
