import React, {useState} from "react";
import axios from "axios"
// components

import AddSell from "components/Cards/AddSell.js";
 
export default function AddSellContainer() {
  const [newSale, setNewSale] = useState(
    {
    date :"",
    ticket:"",
    code:"",
    delivered:"", 
    model:"",
    clientName:"",
    clientPhone :"",
    clientAddress:"",
    observations:"",
    paymentMethod:"",
    totalPrice:"", 
    prePayment:"",
    restPay:""
    })

  const handleChange = (e)=>{
    e.preventDefault()
    const value = e.target.value;
    const name = e.target.name
    setNewSale({ ...newSale, [name]: value });
  }

  const handleSubbmit = (e)=>{
    e.preventDefault()
    console.log("entro subbmit")
    axios.post("/api/sales/add", newSale)
    .then((sale)=>{
      console.log("agregada", sale)
    })
    .catch((e)=>{
      console.log(e)
      return e
    })

  }

return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <AddSell handleChange={handleChange} handleSubbmit={handleSubbmit}/>
        </div>
     
      </div>
    </>
  );
}
