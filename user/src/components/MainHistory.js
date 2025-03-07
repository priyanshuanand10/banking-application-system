import React from 'react'
import Header from './Header';
import { Row, Col } from "reactstrap";
import Footer from './Footer';
import Menus from './Menus';
import {ToastContainer} from 'react-toastify';

import DetailsUser from "./DetailsUser";
import History from "./History"
export default function MainHistory(props) {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(228,161,161,1) 0%, rgba(232,98,98,1) 19%, rgba(139,23,23,1) 62%, rgba(128,3,3,1) 100%)", overflowX: "hidden" ,height:"85vh" }}>
    <Header/>

    <ToastContainer />

    <Row className="my-5">
      <Col md={3}>
        <Menus />
      </Col>

      <Col md={5}>
   
        <History/>
   
      </Col>
      <Col md={4}>
      <DetailsUser />
   
      </Col>
    </Row>

    <Footer />
  </div>
  )
}
