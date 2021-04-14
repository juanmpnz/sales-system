import React, {useContext, useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../index";
import axios from "axios";
// views
import Login from "views/auth/Login.js";
 
export default function Auth() {
  const { setOffice, setUsers, users } = useContext(UserContext);
 
  useEffect(() => {

     axios.get("/api/office")
       .then((offices)=>{
        setOffice(offices.data)
     }) 
      if(Object.entries(users).length){
        axios
        .get("/api/users/me")
        .then((res) => res.data)
        .then((user) => {
          setUsers(user);
        })
        .catch(({ response }) => {
          console.error(response);
        });
      } 
  }, [setUsers]);

  console.log(users)
  
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
            <Route path="/" exact component={Login}/>       
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        
        </section>
      </main>
    </>
  );
}
