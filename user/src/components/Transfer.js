import React, { useState } from "react";
import { accNumber } from "./Login";
import { transfer } from "../API/service";
import { toast } from "react-toastify";


const Transfer = () => {
  const [formStatus, setFormStatus] = React.useState("transfer");
  const [amt, setAmt] = useState(0);
  const [accnumber, setAccnumber] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("processing...");

    transfer(accNumber,accnumber, amt).then((msg)=>{
        if(msg.length===0) 
    {
        toast.error("Something went wrong")
    }else
{
    setAccnumber(0)
  setAmt(0)
      toast.success("Process Complete , Successfully transfered "+amt+" to "+accnumber)
    setFormStatus("transfer");
} })


  };
  return (
    <div className="container mt-5" style={{ width: "50%", color: "white" ,position:"relative" ,top:"0" }}>
      <h2 className="mb-3">Enter Account number and Amount to whom you want to transfer : </h2>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
          <label className="form-label" htmlFor="Account number">
            Account number
          </label>
          <input
            className="form-control"
            type="number"
            id="accnumber"
            required
            autoComplete="off"
            onChange={(e) => {
             setAccnumber(e.target.value)
            }}
            value={accnumber}
          />
        </div>
       
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
export default Transfer;
