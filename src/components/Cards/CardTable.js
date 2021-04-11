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
    selector: 'fecha',
    sortable: true,
  },
  {
    name: 'Codigo',
    selector: 'codigo',
    sortable: true,
    right: true,
  },
  {
    name: 'Factura',
    selector: 'factura',
    sortable: true,
    right: true,
  },
  {
    name: 'Producto Entregado',
    selector: 'productoEntregado',
    sortable: true,
    right: true,
  },
  {
    name: 'Resta cobrar',
    selector: 'restaCobrar',
    sortable: true,
    right: true,
  },
  {
    name: 'Acciónes',
    selector: 'acciones',
    sortable: true,
    right: true,
  },
];


export default function CardTable({title, data}) {

  return (
    <>
  
        <DataTable
         title={`Listado de ${title}`}
         columns={columns}
         data={data}
         theme="solarized"
        />
       

    </>
  );
}

 