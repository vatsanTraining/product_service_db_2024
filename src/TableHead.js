import React from "react";
const TableHead = ({ colRef }) => {

    const createElement = (element,idx)=>{
return <td key={idx}>{element}</td>
    }
  return (
      <thead>
        <tr>
         { colRef.map(createElement)}
        </tr>
      </thead>
  );
};



export default TableHead;
