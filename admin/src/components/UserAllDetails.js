import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  // Container,
} from "reactstrap";

export default function UserAllDetails({data}) {

  //var date1 = new Date(dob);
  // console.log(date1)


  return (
    <div>
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
  );
}
