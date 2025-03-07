import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteUserDetails } from '../API/service';
import './login.css';


let nameadmin="";
function DeleteUser() {

  const [accNumber, setAccNumber] = useState()
  const [formStatus, setFormStatus] = React.useState('Send')
  const [resetStatus, setresettatus] = React.useState('reset')
const submitTheForm = (event) => {
    setFormStatus("send")
  event.preventDefault();

deleteUserDetails(accNumber).then((msg)=>{
    toast.success("User Deleted of Account number : "+accNumber);
    setAccNumber(0)
setFormStatus("send")
}).catch(error=>{console.log(error)})

}


const reset=()=>{
setresettatus("resetting")
    setAccNumber(0)
    setresettatus("reset")
}
  return (
    <div className="container mt-5"  style={{
        height: "65vh",
        width:"70%",
        borderRadius:"10px",
        position: "relative",
        backgroundColor: "",
        overflow: "scroll",
        overflowX: "hidden",
        color:"white",
        float:"right",
        paddingRight:"500px",
        paddingBottom:"50px"

      }}>
    <form onSubmit={submitTheForm}>
    <h4 className="mb-3">Enter the user Accout number which you want to delete : </h4>
    <div className="mb-3">
          <label className="form-label" htmlFor="accnumber">
            Account Number 
          </label>
          <input className="form-control" type="number" id="accnumber" required autoComplete='off'  onChange={(e)=>{setAccNumber(e.target.value)}} value={accNumber} min={10000000001} max={9999999999999999}/>
        </div>
  
   
   
    <button className="btn btn-success" type="submit">
    {formStatus}
        </button>
        <button className="btn btn-warning mx-3" type="button" onClick={reset}>
    {resetStatus}
        </button>
      </form>
 </div>
  );
}
export {nameadmin};
export default DeleteUser;