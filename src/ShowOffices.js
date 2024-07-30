import React, { useContext } from "react";
import { useData } from "./useData";
import { OfficeListContext } from "./OfficeContext";
const ShowOffices = () => {
  
  const  officeList  = useContext(OfficeListContext);

  const createElement = (offices, idx) => {
    var imgRef = "./images/" + offices.icon;

    return (
      <div key={idx} className="child">
        <img src={imgRef} alt="icon"></img>
        <p>{offices.cityName}</p>
        <p>{offices.address}</p>
      </div>
    );
  };

  return (
    <div className="container">{officeList?.map(createElement)} </div>
  );
};

export default ShowOffices;
