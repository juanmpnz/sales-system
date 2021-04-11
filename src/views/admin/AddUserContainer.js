import React, {useState, useContext} from "react";

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
  office:""
  })

  const handleChange = (e)=>{
    e.preventDefault()
    const value = e.target.value;
    const name = e.target.name
    setNewUser({ ...newUser, [name]: value });
  }


  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <AddUser handleChange={handleChange} office={office}/>
        </div>
      </div>
    </>
  );
}
