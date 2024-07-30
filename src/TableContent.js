import React, { useState } from "react";
import Table from "./Table";

const TableContent = () => {
  const colRef = ["Order Number", "Customer Name", "Order Value"];
  const rowRef = [
    { orderNumber: 101, customerName: "Lokesh", orderValue: 67000 },
    { orderNumber: 102, customerName: "Mahi", orderValue: 77000 },
    { orderNumber: 103, customerName: "Balaji", orderValue: 87000 },
    { orderNumber: 104, customerName: "viek", orderValue: 97000 },
  ];

  const [value, setValue] = useState(rowRef);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    let srch = event.target.value;
    setSearch(srch);

    const filteredList = rowRef.filter((element) =>
      element.customerName.toLowerCase().includes(search.toLowerCase())
    );
    setValue(filteredList);
  };

  return (
    <div>
      <Table colRef={colRef} rowRef={value} handleChange={handleChange}></Table>
    </div>
  );
};

export default TableContent;
