import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Container, Row, Column } from "./HeaderStyles";
import { accNumber } from "./Login";

export default function Header(props) {
  const happyFace=()=>{
    toast.success(`Welcome ${accNumber}`,{
      position: toast.POSITION.TOP_CENTER
  })
  }
  return (
    <Box className="text-center">
      <Container>
        <Row>
          <Column>
            <h4 style={{ color: "lightgray", fontSize: 18 ,cursor:"pointer"  , alignSelf: 'auto', alignItems:"center" ,paddingTop:16 , }} onClick={happyFace}> {accNumber}</h4>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 19 , backgroundColor:"black" }}
              to="/home"
            >
              Home
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 19 , backgroundColor:"black"}}
              to="/users"
            >
              Details
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 19 , backgroundColor:"black"}}
              to="/withdraw"
            >
             Withdraw
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 19 , backgroundColor:"black"}}
              to="/deposite"
            >
              Deposite
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 19, backgroundColor:"black" }}
              to="/transfer"
            >
              Transfer
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 19, backgroundColor:"black" }}
              to="/"
            >
              Sign Out
            </Link>
          </Column>
        </Row>
      </Container>
      <Column
        style={{ paddingLeft: 1524, float: "right", position: "absolute" }}
      >
        {/* <FooterLink href="#">About Us </FooterLink> */}

        <Link to="/home">
          <img
            src={require("../Image/logo.jpg")}
            alt="logo"
            style={{ height: "70px", top: 11, position: "fixed" }}
          />
        </Link>
      </Column>
    </Box>
  );
}
