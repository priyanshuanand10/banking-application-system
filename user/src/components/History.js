import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import { accNumber } from "./Login";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
  // Container,
} from "reactstrap";
import { gethistory } from '../API/service';
export default function History() {



  const [data, setData] = useState(
[
    {
      "type": "",
      "amount": 0,
      "transictiontime": ""
  },]
  );

  useEffect(() => {
 
    gethistory(accNumber).then((msg)=>{
      toast.success("Featched History")
      setData(msg)
    
    })
  }, [])
  


  return (
    <div>



<div
        style={{
          height: "60vh",
          width: "70%",
          borderRadius: "10px",
          position: "relative",
          backgroundColor: "",
          overflow: "scroll",
          overflowX: "hidden",
          color: "white",
          float: "right",
          paddingRight: "500px",
          // paddingBottom: "50px",
        }}
      >
        <br />
        <Card
          className="container my-2"
          style={{
            width: "25rem",
          }}
        >
      

          <CardBody className="">
            <CardTitle tag="h5" style={{ color: "black" }}>
              Account Number : {accNumber}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
             Transiction History
            </CardSubtitle>

         
            <ol style={{color:"black",fontSize:"14px" }}>
              {data.map((item, index) => (
                <li key={index}>
                  <span>type: {item.type}</span>
                  <br />
                  <span>amount: {item.amount}</span>
                  <br />
                  <span>
                    time: {item.transictiontime}
                    <hr/>
        
          
                  </span>
                </li>
              ))}
            </ol>
            
          </CardBody>
        </Card>
      </div>

    </div>
  )
}
