import React from "react";
import {useData} from "./useData";
const ShowOffices = () => {
  let offices = useData("city.json");

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

  return <div className="container">{offices.data.map(createElement)}</div>;
};

export default ShowOffices;

<img src="/image.jpg" alt="image" />;
