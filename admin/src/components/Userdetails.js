import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
} from "reactstrap";

export default function Userdetails({details}) {
  const dob = details.dob;
  //var date1 = new Date(dob);
  // console.log(date1)


  return (
    <div>
      <Card
        className="container my-2"
        style={{
          width: "23rem",
          height: "27rem",
        }}
      >
        <img
          className="container"
          style={{
            width: "10rem",
            height: "10rem",
          }}
          alt="user img"
          src="user.png"
        />
     
       
        <CardBody className="text-center">
          <CardTitle tag="h5">User Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Full Name: {details.fullnname}
          </CardSubtitle>
          <CardText>Age :{details.age}</CardText>
          <CardText>DOB : {dob}</CardText>
          <CardText>Balance :{details.balance} </CardText>
          <CardText>Email : {details.email}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
