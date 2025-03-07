import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { myAxios } from "../API/api";
import UserAllDetails from "./UserAllDetails";


export default function AllUserAllDetails() {
  useEffect(() => {
    document.title = "AllUser";
  }, []);

  const getdata = () => {
    myAxios.get('/getUserAllDetail').then(
      function (response) {
        console.log(response.data);
        setUser(response.data);
        toast.success("Users Featched SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
        });
      },
      (error) => {
        console.log("some error occured");
        toast.error("something went wrong !!!")
      }
    );
  };

  useEffect(() => {
    getdata();
  }, []);

  const [user, setUser] = useState([
    {
        accountnumber: "",
        userdetails: {
          fullnname: "",
          age: 0,
          dob: "",
          balance: 0,
          email: "",
        },
        address: {
          location: "",
          city: "",
          state: "",
          pin: 0,
        },
        history: [
          {
            type: "",
            amount: 0,
            transictiontime: "",
          },
        ],
      }
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
          ? user.map((i) => <UserAllDetails key={i.accountnumber} data={i} />)
          : "Empty User"}
     
      </div>
  
  );
}
