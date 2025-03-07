import React, { useState, useEffect } from "react";
import Userdetails from "./AdminDetails";
import { toast } from "react-toastify";
import { myAxios } from "../API/api";
export default function AllAdmins() {
  useEffect(() => {
    document.title = "AllAdmins";
    getdata();
  }, []);

  const getdata = () => {
    myAxios.get('/getAllAdmin').then(
      function (response) {
        console.log(response.data);
        setUser(response.data);
        toast.success("Admin Featched SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
          theme:"dark"
        });
      },
      (error) => {
        console.log("some error occured");
        toast.error("something went wrong !!!")
      }
    );
  };

//   useEffect(() => {
//     getdata();
//   }, []);

  const [user, setUser] = useState([
    {
      uname: "mohan",
      phno:"xxxxxxx",
      email: "anand77@gmail.com",
    },
  ]);

  return (
    
      <div
        style={{
          height: "65vh",
          width:"100%",
          borderRadius:"10px",
          position: "relative",
          backgroundColor: "",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        
        {user.length > 0
          ? user.map((i) => <Userdetails key={i.email} details={i} />)
          : "Empty User"}
     
      </div>
  
  );
}
