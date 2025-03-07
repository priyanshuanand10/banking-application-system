import React ,{useEffect}from "react";

// import { Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
//import {useLocation} from 'react-router-dom';
// import Menus from "./Menus";
import Header from "./Header";
import Home from "./Home";

import Footer from "./Footer";
export default function LandingPage({ route, navigation }) {
  //const location = useLocation(); 
  useEffect(() => {
  document.title="Home";
}, [])

  return (
    <div style={{ background: "linear-gradient(90deg, rgba(228,161,161,1) 0%, rgba(232,98,98,1) 19%, rgba(139,23,23,1) 62%, rgba(128,3,3,1) 100%)", overflowX: "hidden" }} className="text-center">
  
      <Header/>

      <ToastContainer />

      {/* <Row className="my-5">
        <Col md={3}>
          <Menus />
        </Col>

        <Col md={9}>
          <Home />
        </Col>
      </Row> */}
    <Home />
      <Footer />
    </div>
  );
}
