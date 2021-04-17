import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import { createPopper } from "@popperjs/core";
import {customStyles} from "../../assets/styles/modal"

import axios from "axios";
import Modal from 'react-modal';
const NotificationDropdown = ({type, id,rowName, setReRender}) => {
  console.log(id)
  const [modalIsOpen,setIsOpen] = useState(false);
  const history= useHistory()
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
      //modal
      const openModal =()=> {
        setIsOpen(true);
      }
      
      const closeModal=()=>{
        setIsOpen(false);
        history.push("/admin/showsales")
      }
 
  const handleDelete = ( )=>{
    console.log(id)
    axios.post("/api/sales/delete/" + id)
    .then((user)=>{
      setIsOpen(true);
      setReRender(true)
    })
    .catch((e)=>{
      console.log(e)
      return e
    })
    setReRender(false)
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
        <p>Factura Eliminada</p> 
      
          <div  style={{display:"flex",justifyContent:"flex-end", padding: 10 }}>
             <button className="bg-blueGray-800 text-white active:bg-blueGray-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" onClick={closeModal}>Cerrar</button>
          </div>
        </Modal>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
      style={{position:"absolute", top:-10}}
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-100 float-left py-0 list-none text-left rounded shadow-lg min-w-48 min-h-48"
        }
      >
     
        <a className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          } onClick={()=>setDropdownPopoverShow(false)}>X</a>
        <hr/>
 
        <a      
          className={
            "text-sm py-0 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => history.push("/admin/showsales/"+ id)}
        >
          Detalles
        </a>
        <a       
          className={
            "text-sm py-0 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => history.push("/selledit")}
        >
          Editar
        </a>
        <a       
          className={
            "text-sm py-0 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={handleDelete}
        >
          Eliminar
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
