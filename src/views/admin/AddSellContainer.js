import React, {useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
// components
import Modal from 'react-modal';
import AddSell from "components/Cards/AddSell.js";
import {customStyles} from "../../assets/styles/modal"
export default function AddSellContainer() {
  const history = useHistory()
  const [error, setError] = useState("")
  const [modalIsOpen,setIsOpen] = useState(false);
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

      //modal
    const openModal =()=> {
      setIsOpen(true);
    }
    
    const closeModal=()=>{
      setIsOpen(false);
      setError("")
      history.push("/admin/showsales")
    }

  const handleSubbmit = (e)=>{
    e.preventDefault()
    console.log("entro subbmit")
    axios.post("/api/sales/add", newSale)
    .then((sale)=>{
    
      setIsOpen(true)
    
    })
    .catch((e)=>{
      console.log(e)
      return e
    })

  }

return (
    <>
       <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles} 
          contentLabel="Succsess modal"
          ariaHideApp={false}
        >
        <p>Factura agregada</p> 
      
          <div  style={{display:"flex",justifyContent:"flex-end", padding: 10 }}>
             <button className="bg-blueGray-800 text-white active:bg-blueGray-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" onClick={closeModal}>Cerrar</button>
          </div>
        </Modal>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <AddSell handleChange={handleChange} handleSubbmit={handleSubbmit}/>
        </div>
     
      </div>
    </>
  );
}
