import React from "react";
import DataTable, { createTheme } from 'react-data-table-component';
 
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";



export default function CardTable({title, data, setReRender}) {
  const ActionComponent = ({  row, onClick  }) => {
    const clickHandler = () => onClick(row);   
  
   return <button onClick={clickHandler}>Action</button>;
  };

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
      cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: "bold" }}><TableDropdown id={row.id} rowName={row.code} setReRender={setReRender} /></div></div>,
  
      sortable: true,
      right: true,
    },
  ];

  const columnsUsers = [
    {
      name: 'Nombre',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      right: true,
    },
    {
      name: 'Sucursal',
      selector: 'officeId',
      sortable: true,
      right: true,
    },
    {
      name: 'Rol',
      selector: 'role',
      sortable: true,
      right: true,
    },
 
    {
      name: 'Acciónes',
      cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: "bold" }}><TableDropdown id={row.id} rowName={row.code} setReRender={setReRender} /></div></div>,
  
      sortable: true,
      right: true,
    },
  ];
  

  return (
    <>
        <DataTable
         title={`Listado de ${title}`}
         columns={title === "usuarios" ? columnsUsers : columns}
         data={data}      
         allowOverflow={true}
         highlightOnHover={true}
         pointerOnHover={true}
         responsive={true}      
         />   
      
    </>
  );
}

 