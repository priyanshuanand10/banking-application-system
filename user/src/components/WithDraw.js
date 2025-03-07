import React, { useState } from "react";
import { accNumber } from "./Login";
import { withdraw } from "../API/service";
import { toast } from "react-toastify";


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("withdraw");
  const [amt, setAmt] = useState();


  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("processing...");

    withdraw(accNumber,amt).then((msg)=>{
        if(msg.length===0) 
    {
        toast.error("Something went wrong")
    }else
{
  setAmt(0)
      toast.success("Process Complete , Successfully withdraw "+amt)
    setFormStatus("withdraw");
} })


  };
  return (
    <div className="container mt-5" style={{ width: "50%", color: "white" ,position:"relative" ,top:"0" }}>
      <h2 className="mb-3">Enter Amount You Want to Withdraw : </h2>
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
export default Contact;
