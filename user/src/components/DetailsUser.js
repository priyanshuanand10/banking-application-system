import React, { useState , useEffect} from "react";
import { toast } from "react-toastify";
import { accNumber } from "./Login";
import { getuserinfo } from "../API/service";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  // Container,
} from "reactstrap";
export default function DetailsUser() {

  const [data, setData] = useState({
        "fullnname": "",
        "age": 0,
        "dob": "",
        "balance": 0,
        "email": ""
  });

useEffect(() => {
  
    getuserinfo(accNumber).then((msg)=>{
        setData(
            {
                "fullnname": msg.fullnname,
                "age": msg.age,
                "dob": msg.dob,
                "balance": msg.balance,
                "email": msg.email
          }

        )


    }).catch((err)=>{console.log(err);
    toast.error(err);
    });
}, [])


  return (
    <>
  

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
          <img
            className="container"
            style={{
              width: "10rem",
              height: "9rem",
            }}
            alt="user img"
            src="user.png"
          />

          <CardBody className="">
            <CardTitle tag="h5" style={{ color: "black" }}>
              Account Number : {accNumber}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Full Name: {data.fullnname}
            </CardSubtitle>
            <CardText>Age : {data.age}</CardText>
            <CardText>DOB : {data.dob} </CardText>
            <CardText>Balance : {data.balance}</CardText>
            <CardText>Email : {data.email} </CardText>
           
          </CardBody>
        </Card>
      </div>
    </>
  );
}
