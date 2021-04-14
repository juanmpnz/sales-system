import React, {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

// components
import CardTable from "components/Cards/CardTable.js";
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function Tables({title}) {
  const history = useHistory()
  const [users, setUsers] = useState([
    {acciones:<TableDropdown type={title}/> 
  }
  ])
  const [sales, setSales] = useState([ 
 ])


  useEffect(() => {

    axios.get("/api/sales/")
    .then((sales)=> {
      console.log("sales then", sales.data[0])
      setSales(sales.data )
    })
      
    .catch((error)=>error)
  
  }, [])
 

 console.log(sales)
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable title={title} data={sales}/>
        </div>
      </div>
    </>
  );
}
