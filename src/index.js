import React, { useState, createContext } from "react";
 import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
 import { render } from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

export const UserContext = createContext();

const Root = () => {
  const [users, setUsers] = useState({});
  const [office, setOffice] = useState([])

  return (
    <UserContext.Provider value={{ users, setUsers }, {office, setOffice}}>
    <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />   
      <Route path="/" exact component={Auth} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
 
    </UserContext.Provider>
  );
};

export default render(<Root />, document.getElementById("root"));
 
 

 

 