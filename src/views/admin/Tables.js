import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

export default function Tables({title}) {

  const users = [{ id: 1, fecha: 'sales', codigo: '609P', factura:"744412", productoEntregado: "SI", restaCobrar:"$1050.00", acciones: "<TableDropdown/>" }, { id: 2, fecha: ' Barbarian', codigo: '401A', factura:"055225", productoEntregado: "NO", restaCobrar:"$210500.00",acciones:" <TableDropdown/> "}  ];
  const sales = [{ id: 1, fecha: 'users', codigo: '609P', factura:"744412", productoEntregado: "SI", restaCobrar:"$1050.00", acciones: "<TableDropdown/>" }, { id: 2, fecha: ' Barbarian', codigo: '401A', factura:"055225", productoEntregado: "NO", restaCobrar:"$210500.00",acciones: "<TableDropdown/> "}  ];
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable title={title} data={ title !== "usuarios" ? users : sales}/>
        </div>
      </div>
    </>
  );
}
