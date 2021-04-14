import React from "react";
import DataTable, { createTheme } from 'react-data-table-component';
 
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#ffffff',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
 
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

 

const columns = [
  {
    name: 'Fecha',
    selector: 'date',
    sortable: true,
  },
  {
    name: 'Codigo',
    selector: 'code',
    sortable: true,
    right: true,
  },
  {
    name: 'Factura',
    selector: 'ticket',
    sortable: true,
    right: true,
  },
  {
    name: 'Producto Entregado',
    selector: 'delivered',
    sortable: true,
    right: true,
  },
  {
    name: 'Resta cobrar',
    selector: 'restPay',
    sortable: true,
    right: true,
  },
  {
    name: 'Acciónes',
    cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: "bold" }}><TableDropdown id={row.id}/></div></div>,

    sortable: true,
    right: true,
  },
];


export default function CardTable({title, data}) {

  const ActionComponent = ({  row, onClick  }) => {
    const clickHandler = () => onClick(row);   
  
   return <button onClick={clickHandler}>Action</button>;
  };

  return (
    <>
        <DataTable
         title={`Listado de ${title}`}
         columns={columns}
         data={data}
         theme="solarized"
         allowOverflow={true}
         highlightOnHover={true}
         pointerOnHover={true}
         responsive={true}
         
           
     
        />   
      
    </>
  );
}

 