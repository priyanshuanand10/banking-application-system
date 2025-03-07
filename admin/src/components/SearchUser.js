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
import { getAllUserDetailsById } from "../API/service";
export default function SearchUser() {
  const [accNumber, setAccNumber] = useState(0);
  const [data, setData] = useState({
    accountnumber: "",
    userdetails: {
      fullnname: "",
      age: 0,
      dob: "",
      balance: 0,
      email: "",
    },
    address: {
      location: "",
      city: "",
      state: "",
      pin: 0,
    },
    history: [
      {
        type: "",
        amount: 0,
        transictiontime: "",
      },
    ],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    getAllUserDetailsById(accNumber)
      .then((msg) => {
        if (msg.length === 0) {
          toast.error("Account number Does not exist please check ");
          setData({
            accountnumber: "",
            userdetails: {
              fullnname: "",
              age: 0,
              dob: "",
              balance: 0,
              email: "",
            },
            address: {
              location: "",
              city: "",
              state: "",
              pin: 0,
            },
            history: [
              {
                type: "",
                amount: 0,
                transictiontime: "",
              },
            ],
          });
        } else if (msg.length !== 0) {
          console.log(msg);
          setData(msg);
          toast.success("User fetched of Account number : " + accNumber);
        }

        setAccNumber(0);
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
        style={{ paddingLeft: "325px" }}
        onSubmit={onSubmit}
      >
        <input
          className="form-control"
          type="number"
          id="accnumber"
          required
          autoComplete="off"
          placeholder="enter account number to search ..."
          style={{ borderRadius: "2%", width: "25rem" }}
          onChange={(e) => {
            setAccNumber(e.target.value);
          }}
          value={accNumber}
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
              Account Number : {data.accountnumber}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Full Name: {data.userdetails.fullnname}
            </CardSubtitle>
            <CardText>Age : {data.userdetails.age}</CardText>
            <CardText>DOB : {data.userdetails.dob} </CardText>
            <CardText>Balance : {data.userdetails.balance}</CardText>
            <CardText>Email : {data.userdetails.email} </CardText>
            <CardText>localtion : {data.address.location} </CardText>
            <CardText>city : {data.address.city} </CardText>
            <CardText>state : {data.address.state} </CardText>
            <CardText>pin : {data.address.pin} </CardText>
            <CardText>transiction history : </CardText>
         
            <ol style={{color:"black",fontSize:"14px" }}>
              {data.history.map((item, index) => (
                <li key={index}>
                  <span>type: {item.type}</span>
                  <br />
                  <span>amount: {item.amount}</span>
                  <br />
                  <span>
                    time: {item.transictiontime}
                    <br />
                    <br />
                  </span>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
