import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ButtonPanel = ({changeFirst,changeLast}) => {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  return (
    <div>
      <h2>
        {firstName}
        {lastName}
      </h2>
      <button onClick={changeFirst}>Change First Name</button>
      <button onClick={changeLast}>Change Last Name</button>
    </div>
  );
};

export default ButtonPanel;
