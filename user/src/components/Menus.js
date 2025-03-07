import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
export default function Menus() {
  return (
    <div
      style={{
      
        height: "100%",
        width: "100%",
        background: "",
        borderRadius: "10",
        paddingLeft: 100,
        paddingBottom:10,
        fontWeight:"bold"
        
      }}
      className="text-center"
    >
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          to="/home"
          tag="a"
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="/users"
          tag="a"
        >
        Details
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/withdraw"
          tag="a"
        >
          Withdraw
        </Link>
        {/* <Link className="list-group-item list-group-item-action" to="/adduser" tag="a">
          Add User
        </Link> */}
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/userloginpass"
          tag="a"
        >
        Create User Password
        </Link> */}
        <Link
          className="list-group-item list-group-item-action"
          to="/deposite"
          tag="a"
        >
         Deposite
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/transfer"
          tag="a"
        >
        Transfer
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/history"
          tag="a"
        >
         Transiction History
        </Link>

     
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/techinicalproblem"
          tag="a"
        >
         Technical Isuue ?
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/about"
          tag="a"
        >
         About Us
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/"
          tag="a"
        >
          Sign Out
        </Link>
      </ListGroup>
      <p />
    </div>
  );
}
