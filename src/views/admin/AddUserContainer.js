import React from "react";

// components

import AddUser from "components/Cards/AddUser.js";
 
export default function AddUserContainer() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <AddUser />
        </div>
      </div>
    </>
  );
}
