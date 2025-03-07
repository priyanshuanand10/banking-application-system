import React, { useState } from "react";
import { accNumber } from "./Login";
import { toast } from "react-toastify";
import { deposite } from "../API/service";


const Deposite = () => {
  const [formStatus, setFormStatus] = React.useState("Deposite");
  const [amt, setAmt] = useState();


  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("processing...");

    deposite(accNumber,amt).then((msg)=>{
        if(msg.length===0) 
    {
        toast.error("Something went wrong")
    }else
{
    setAmt(0)
    toast.success("Process Complete , Successfully deposited "+amt)
    setFormStatus("Deposite");
} })


  };
  return (
    <div className="container mt-5" style={{ width: "50%", color: "white" ,position:"relative" ,top:"0" }}>
      <h2 className="mb-3">Enter Amount You Want to Deposite : </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="Amount">
            Amount
          </label>
          <input
            className="form-control"
            type="number"
            id="name"
            required
            autoComplete="off"
            onChange={(e) => {
             setAmt(e.target.value)
            }}
            value={amt}
          />
        </div>
  
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default Deposite;
