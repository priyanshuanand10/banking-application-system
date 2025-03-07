import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

export default function AdminDetails({details}) {
  return (
    <div>
      <Card
        className="container my-2"
        style={{
          width: "23rem",
          height: "20rem",
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
        <CardBody>
          <CardTitle tag="h5">Admin Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Full Name: {details.uname}
          </CardSubtitle>
          <CardText>Email : {details.email}</CardText>
          <CardText>phone no :{details.phno} </CardText>
          <Container>
          {/* <button type="button" className="btn btn-success ">
              Show All
            </button>
            <button type="button" className="btn btn-warning mx-3 ">
              Update
            </button>
            <button type="button" className="btn btn-danger ">
              Delete
            </button> */}
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
