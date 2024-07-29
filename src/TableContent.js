import React from "react";
import Table from "./Table";

const TableContent = () => {
  const colRef = ["Order Number", "Customer Name", "Order Value"];
  const rowRef = [
    { orderNumber: 101, customerName: "Lokesh", orderValue: 67000 },
    { orderNumber: 102, customerName: "Mahi", orderValue: 77000 },
    { orderNumber: 103, customerName: "Balaji", orderValue: 87000 },
    { customerName: "viek", orderValue: 97000 },
  ];
  return (
    <div>
      <Table colRef={colRef} rowRef={rowRef}></Table>
    </div>
  );
};

export default TableContent;
