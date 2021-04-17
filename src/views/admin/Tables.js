import React, {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

// components
import CardTable from "components/Cards/CardTable.js";
 
export default function Tables({title}) {
  const history = useHistory()
  const [reRender,setReRender] = useState(false)
  const [users, setUsers] = useState([
    
  ])

  const [sales, setSales] = useState([ 
 ])


  useEffect(() => {

    axios.get("/api/sales/")
    .then((sales)=> {
      console.log("sales then", sales.data[0])
      setSales(sales.data)
    })
      
    .catch((error)=>error)


    axios.get("/api/users/")
    .then((user)=> {
      console.log("sales then", user.data[0])
      setUsers(user.data)
    })
      
    .catch((error)=>error)
  
  }, [reRender])
 

 console.log(title)
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable title={title} data={title === "usuarios" ? users:sales} setReRender={setReRender}/>
        </div>
      </div>
    </>
  );
}
