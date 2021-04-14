import React, {useEffect, useState} from "react";
import axios from "axios"
import {useHistory, useParams} from "react-router-dom";
import moment from 'moment';
 
export default function CardProfile() {
  const history = useHistory()
  const [sale, setSale] = useState([])
  const { id } = useParams();
  
  useEffect(() => {
    axios.get("/api/sales/" + id)
    .then((saleDetail)=>{
      setSale(saleDetail.data)
    })
  }, [setSale])
 
  return (
    <>
    {sale[0] !== undefined ? 
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
        <div className="px-6">
        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600 py-4">
             Factura Nº {sale[0].ticket}
                  </span>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Fecha:</p>
          <p className=" inline-flex mx-auto px-4">{moment().format(sale[0].date).slice(0,10)} </p>
          </div>
 
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Codigo:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].code}  </p>
          </div>
          <div className="py-4 "> 
          <p className="inline-flex mx-auto w-full lg:w-9/12 px-4">Entregado:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].delivered}  </p>
          </div>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Modelo:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].model}  </p>
          </div>
          <br/>
          <span className="text-sm text-blueGray-400">Información del cliente</span>
          <hr></hr>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Nombre del cliente:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].clientName} </p>
          </div>
          <div className="py-4 "> 
          <p className="inline-flex mx-auto w-full lg:w-9/12 px-4">Télefono del cliente:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].clientPhone}  </p>
          </div>
          <div className="py-4 "> 
          <p className="inline-flex mx-auto w-full lg:w-9/12 px-4">Dirección del cliente:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].clientAddress}  </p>
          </div>
          <br/>
          <span className="text-sm text-blueGray-400">Información del pago</span>
          <hr></hr>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Método de pago:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].paymentMethod} </p>
          </div>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Precio total:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].totalPrice}  </p>
          </div>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Seña:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].prePayment}  </p>
          </div>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Resto:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].restPay}  </p>
          </div>
          <div className="py-4 "> 
          <p  className="inline-flex mx-auto w-full lg:w-9/12 px-4">Observaciónes:</p>
          <p className=" inline-flex mx-auto px-4">{sale[0].observations} </p>
          </div>
     
        </div>
      </div>      
      : null}
    
    <div style={{display:"flex", alignItems:"center", justifyContent:"flex-end", marginRight:"5%"}}>
        <button
        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
        type="submit"
        style={{width: "10%"}}
        onClick={()=>history.goBack()}
        >
          Atras
      </button>
        </div>
    </>
  );
}
