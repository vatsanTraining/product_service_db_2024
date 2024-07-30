import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowOffices from "./ShowOffices";
import { createContext } from "react";


export const OfficeListContext = createContext();

const OfficeContext = () => {
 
  const [officeList, setOfficeList] = useState([]);

  useEffect(() => {
    async function fetchData(){
        let list = await axios.get("city.json");
        setOfficeList(list.data);

    }
    fetchData();
  }, []);

  return (
    <div>
      <OfficeListContext.Provider value={officeList }>
        {<ShowOffices></ShowOffices>}
      </OfficeListContext.Provider>
    </div>
  );
};

export default OfficeContext;
