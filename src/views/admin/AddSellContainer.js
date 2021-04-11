import React from "react";

// components

import AddSell from "components/Cards/AddSell.js";
 
export default function AddSellContainer() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <AddSell />
        </div>
     
      </div>
    </>
  );
}
