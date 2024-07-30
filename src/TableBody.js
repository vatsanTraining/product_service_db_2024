import React from "react";
import PropTypes from "prop-types";

const TableBody = ({rowRef}) => {
  
  const createElement = (element, idx) => {
      return (
        <tr key={idx}>
          <td>{element.orderNumber}</td>
          <td>{element.customerName}</td>
          <td>{element.orderValue}</td>
        </tr>
      );
    
  };
  return <tbody>{rowRef.map(createElement)}</tbody>;
};

let Order = PropTypes.shape({
  orderNumber: PropTypes.number.isRequired,
  customerName: PropTypes.string,
  orderValue: PropTypes.number.isRequired,
});

TableBody.propTypes = {
  rowRef: PropTypes.arrayOf(Order),
};
export default TableBody;
