import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

import { UserContext } from "../../index";
import {customStyles} from "../../assets/styles/modal"
import Modal from 'react-modal';
import { flex } from "tailwindcss/defaultTheme";

export default function Login() {
const { office } = useContext(UserContext);
const history = useHistory()

const [error, setError] = useState("")
const [modalIsOpen,setIsOpen] = useState(false);
const [login, setLogin] = useState({
  officeId:"",
  email:"",
  password:""
})

//modal
const openModal =()=> {
  setIsOpen(true);
}
 
const closeModal=()=>{
  setIsOpen(false);
  setError("")
}

const handleChange = (e)=>{
  e.preventDefault()
  const value = e.target.value;
  const name = e.target.name
  setLogin({ ...login, [name]: value });
}

 
const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log("login attempt...");
  try {
    const { data } = await axios.post("/api/users/login", {
      email: login.email,
      password: login.password,
      officeId: login.officeId
    });
    console.log(`logged user ${data.email}`);
    history.push("/admin");
  } catch ({ response }) {
       setError("Sucursal o datos de usuario incorrectos")
       setIsOpen(true)
       return
    }
}

  return (
    <>
     <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles} 
          contentLabel="Error Modal"
          ariaHideApp={false}
        >
        <p>{error}</p> 
      
          <div  style={{display:"flex",justifyContent:"flex-end", padding: 10 }}>
             <button className="bg-blueGray-800 text-white active:bg-blueGray-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" onClick={closeModal}>Cerrar</button>
          </div>
        </Modal>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Iniciar Sesión
                  </h6>
                </div>        
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">        
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Seleccionar Sucursal
                    </label>
                 
                     <select onChange={handleChange} name="officeId" id="office" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                     <option key="default" value={false}>Seleccionar</option>
                   {office.map((o,i)=>{
                     return  <option key={i}value={o.id}>{o.officeName}</option>
                   })}
                  </select>
 
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input 
                       onChange={handleChange} 
                       name="email" 
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                       onChange={handleChange} 
                       name="password" 
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Recordar
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
/*                       onClick={()=> history.push("/admin/sucursal")}
 */                    >
                     Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
