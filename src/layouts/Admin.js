import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
 
// views

import Dashboard from "views/admin/Dashboard.js";
 import AddSellContainer from "views/admin/AddSellContainer.js";
import AddUserContainer from "views/admin/AddUserContainer.js";
import Tables from "views/admin/Tables.js";


export default function Admin({ location }) {
  const path = location.pathname
  console.log(path)
  return (
    <>
    <Sidebar />
    <AdminNavbar />
  
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/addsale" exact component={AddSellContainer} />
            <Route path="/admin/adduser" exact component={AddUserContainer} />
            <Route path="/admin/showsales" exact  render={()=> <Tables title="ventas"/>} />
            <Route path="/admin/showusers" exact render={()=> <Tables title="usuarios"/>} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
       
        </div>
      </div>
    </>
  );
}
