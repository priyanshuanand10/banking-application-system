import React from "react";
import { Slide } from 'react-slideshow-image';
export default function AboutUs() {
  
  const slideImages = [
    {
      url: require('../aboutUs/1.png'),
      caption: 'CEO'
    },
    {
      url: require('../aboutUs/2.png'),
      caption: 'CEO'
    },
    {
      url: require('../aboutUs/3.png'),
      caption: 'CEO'
    },
    {
      url: require('../aboutUs/4.png'),
      caption: 'CEO'
    },
  ];
  return (
    <div
      className="text-center container"
      style={{
        height: "74vh",
        width:"840px",
        // width:"80%",
        backgroundColor: "linear-gradient(90deg, rgba(209,255,78,1) 0%, rgba(238,245,201,1) 100%)",
        borderRadius:"10px",
        fontWeight:"bold",
        color:"white"
      
      }}>
        
      <h1 className="display-3" style={{    fontWeight:"bold"}}>About Us</h1>
    <div className="slide-container text-center container">
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide " key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})` , height:"400px",borderRadius:"2%" }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>


      <p style={{ backgroundColor: "" , padding:10 ,color:"yellow" }}>
        We are IDFC Members <br/>Above all are the CEO of IDFC
      </p>

  
    
    </div>
  );
  
}
