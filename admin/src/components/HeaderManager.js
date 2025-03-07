import React from 'react';
import Header from "./Header";
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function HeaderManager() {
    const localtion = useLocation();
    const navigate = useNavigate();
  return (
    <> {navigate("/home")}
    <Header name={localtion.state.name}/>
   
    </>
  )
}
