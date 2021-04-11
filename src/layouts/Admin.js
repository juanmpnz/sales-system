import React, {useEffect,useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios"

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
 
// views
import Dashboard from "views/admin/Dashboard.js";
import AddSellContainer from "views/admin/AddSellContainer.js";
import AddUserContainer from "views/admin/AddUserContainer.js";
import Tables from "views/admin/Tables.js";

import { UserContext } from "../index";

export default function Admin() {
  const { setUsers, setOffice } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/api/user/me")
      .then((res) => res.data)
      .then((user) => {
        setUsers(user);
      })
      .catch(({ response }) => {
        console.error(response);
      });

     axios.get("/api/office")
       .then((offices)=>{
        setOffice(offices.data)
     }) 
  }, [setUsers]);

   return (
    <>
    <Sidebar />
    <AdminNavbar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/addsale" exact component={AddSellContainer} />
            <Route path="/admin/adduser" exact component={AddUserContainer} />
            <Route path="/admin/showsales" exact render={()=> <Tables title="ventas"/>} />
            <Route path="/admin/showusers" exact render={()=> <Tables title="usuarios"/>} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
       
        </div>
      </div>
    </>
  );
}
