import React, {useEffect,useContext, useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios"
import { useHistory } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import CardProfile from  "../components/Cards/CardProfile";
 
// views
import Dashboard from "views/admin/Dashboard.js";
import AddSellContainer from "views/admin/AddSellContainer.js";
import AddUserContainer from "views/admin/AddUserContainer.js";
import Tables from "views/admin/Tables.js";


import { UserContext } from "../index";

export default function Admin() {
  const history = useHistory()
  const { setUsers, setOffice, users , office} = useContext(UserContext);
  const [officeLogged, setOfficeLogged] = useState("")
  
  useEffect(() => {

    axios.get("/api/office")
    .then((offices)=>{
     setOffice(offices.data)

  }) 

   return axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => {
        setUsers(user);     
        for(let i = 0; i< office.length ; i++){
          if(user.officeId === office[i].id){
            return setOfficeLogged(office[i].officeName)
          }
        }
      })
      .catch(({ response }) => {
        if(users.id === undefined)history.push("/")
      });

  }, [setUsers ]);

 

/*     console.log(!Object.entries(users).length , users, office)
 */
   return (
    <>
    <Sidebar />
    <AdminNavbar suc={officeLogged} user={users} />
      <div className="relative md:ml-64 bg-blueGray-100">
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/addsale" exact component={AddSellContainer} />
            <Route path="/admin/adduser" exact component={AddUserContainer} />
            <Route path="/admin/showsales/:id" exact render={()=> <CardProfile/>} />
            <Route path="/admin/showsales" exact render={()=> <Tables title="ventas"/>} />
            <Route path="/admin/showusers" exact render={()=> <Tables title="usuarios"/>} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
       
        </div>
      </div>
    </>
  );
}
