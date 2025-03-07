import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import MainAllUser from "./components/MainAllUser";
import MainAllAdmins from "./components/MainAllAdmin";
import MainAboutUs from "./components/MainAboutUs"
import TechinalIssue from "./components/TechinicalIssue";
import HeaderManager from "./components/HeaderManager";
import MainAddUser from "./components/MainAddUser";
import MainDeleteUser from "./components/MainDeleteUser";
import MainUpdateUser from "./components/MainUpdateUser";
import MainSearchUser from "./components/MainSearchUser";
import MainAllUserAllDetails from "./components/MainAllUserAllDetails";
import MainUserLoginPass from "./components/MainUserLoginPass";
import MainWithDraw  from "./components/MainWithDraw";
import MainDeposite from "./components/MainDeposite";
import MainTransfer from "./components/MainTransfer"
import MainHistory from "./components/MainHistory"

function App() {
  return (
    <div style={{overflowY:"hidden"}}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/users" element={<MainAllUser/>} />
          <Route path="/admin" element={<MainAllAdmins />} />
          <Route path ="/about" element={<MainAboutUs/>} />
          <Route path ="/techinicalproblem" element={<TechinalIssue/>} />
          <Route path ="/headermanager" element={<HeaderManager/>} />
          <Route path ="/adduser" element={<MainAddUser/>} />
          <Route path ="/deleteoneuser" element={<MainDeleteUser/>} />
          <Route path ="/updateuser" element={<MainUpdateUser/>} />
          <Route path ="/searchuser" element={<MainSearchUser/>} />
          <Route path ="/alluseralldetails" element={<MainAllUserAllDetails/>} />
          <Route path ="/userloginpass" element={<MainUserLoginPass/>} />
          <Route path ="/withdraw" element={<MainWithDraw/>} />
          <Route path ="/deposite" element={<MainDeposite/>} />
          <Route path ="/transfer" element={<MainTransfer/>} />
          <Route path ="/history" element={<MainHistory/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
