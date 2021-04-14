import React, {useState, useContext} from "react";
import axios from "axios"

// components
import AddUser from "components/Cards/AddUser.js";
//context
import { UserContext } from "../../index";
 
export default function AddUserContainer() {
  const {office} = useContext(UserContext);
  const [newUser, setNewUser] = useState(
  {email :"",
  password:"",
  name:"",
  lastname:"", 
  role:"",
  officeId:0
  })

  const handleChange = (e)=>{
    e.preventDefault()
    const value = e.target.value;
    const name = e.target.name
    setNewUser({ ...newUser, [name]: value });
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("/api/users/register", newUser)
    .then((user)=>{
      console.log("agregad@", user)
    })
    .catch((e)=>{
      console.log(e)
      return e
    })
  }

return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <AddUser handleChange={handleChange} handleSubmit={handleSubmit} office={office}/>
        </div>
      </div>
    </>
  );
}
