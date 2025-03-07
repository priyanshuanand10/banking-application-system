import React from "react";
import {Button} from 'reactstrap';
import { Slide } from 'react-slideshow-image';
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  const slideImages = [
    {
      url: require('../Image/a1.jpg'),
      caption: 'Slide 1'
    },
    {
      url: require('../Image/a2.png'),
      caption: 'Slide 2'
    },
    {
      url: require('../Image/a3.png'),
      caption: 'Slide 3'
    },
    {
      url: require('../Image/a4.jpg'),
      caption: 'Slide 4'
    },
  ];
  return (
    <div
      className="text-center"
      style={{
        height: "74vh",
        // width:"80%",
        backgroundColor: "linear-gradient(90deg, rgba(209,255,78,1) 0%, rgba(238,245,201,1) 100%)",
        borderRadius:"10px",
        fontWeight:"bold",
        color:"white"
      
      }}>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,height:420,borderRadius:"2%" }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>


      <h1 className="display-3" style={{    fontWeight:"bold"}}>IDFC BANKING SYSTEM</h1>
      <p style={{ backgroundColor: "" , padding:10 ,color:"yellow" }}>
        This is IDFC banking App for Admin Users Not for Normal Users <br />
        Developed by Priyam anand For IDFC ADMIN Users Only{" "}
      </p>

  
    <Button color="success"  onClick={()=>{navigate("/users");}}>Click Here To Get Started</Button>
 
     
    </div>
  );
}
