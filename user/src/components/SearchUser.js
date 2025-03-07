import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  // Container,
} from "reactstrap";

import { getUserDetailsById } from "../API/service";

export default function SearchUser() {


  const [accnumber, setAccnumber] = useState(0)

  const [data, setData] = useState({
    "fullnname": "",
    "age": 0,
    "dob": "",
    "balance": 0,
    "email": ""
});

  const onSubmit = (e) => {
    e.preventDefault();

    getUserDetailsById(accnumber)
      .then((msg) => {
        if (msg.length === 0) {
          toast.error("Account number Does not exist please check ");
          setData({
            "fullnname": "",
            "age": 0,
            "dob": "",
            "balance": 0,
            "email": ""
        });
        } else if (msg.length !== 0) {
          console.log(msg);
          setData(msg);
          toast.success("User fetched of Account number : " + accnumber);
        }

       
      })
      .catch((error) => {
        console.log(error);
        toast.error("Account number Does not exist please check ");
        setData();
      });
  };

  return (
    <>
      <form
        className="container form-inline"
        style={{ paddingLeft: "32px" }}
        onSubmit={onSubmit}
      >
        <input
          className="form-control"
          type="number"
          id="accnumber"
          required
          autoComplete="off"
          placeholder="enter account number to search ..."
          style={{ borderRadius: "2%", width: "25rem" , float:"left" }}
          onChange={(e) => {
            setAccnumber(e.target.value);
          }}
          value={accnumber}
        />

        <button
          className="btn btn-success mx-3"
          type="submit"
          style={{
            textAlign: "center",
            alignContent: "center",
            borderRadius: "50px",
          }}
        >
          submit
        </button>
      </form>

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
          paddingRight: "580px",
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
              Account Number : {accnumber}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Full Name: {data.fullnname}
            </CardSubtitle>
            <CardText>Age : {data.age}</CardText>
            <CardText>DOB : {data.dob} </CardText>
            {/* <CardText>Balance : {data.balance}</CardText> */}
            <CardText>Email : {data.email} </CardText>
           
         
    
          </CardBody>
        </Card>
      </div>
    </>
  );
}
