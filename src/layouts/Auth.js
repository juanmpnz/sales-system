import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

 
// views

import Login from "views/auth/Login.js";
 

export default function Auth() {
  return (
    <>
      
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/pattern_react.png").default + ")",
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
                    
            }}
          ></div>
          <Switch>
            <Route path="/" exact component={Login} />
            
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        
        </section>
      </main>
    </>
  );
}
