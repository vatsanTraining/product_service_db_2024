import React from "react";
import PropType from 'prop-types'
const TableHead = ({ colRef }) => {

    const createElement = (element,idx)=>{
return <th key={idx}>{element}</th>
    }
  return (
      <thead>
        <tr>
         { colRef.map(createElement)}
        </tr>
      </thead>
  );
};

TableHead.propType ={
    colRef:PropType.array
}


export default TableHead;
