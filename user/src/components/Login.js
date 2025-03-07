import React, { useState } from 'react';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import './login.css';
import {Button} from 'reactstrap';
import { toast } from 'react-toastify';
import { loginDetails } from '../API/service';

let accNumber="";
function Login() {


  const navigate = useNavigate();


    const [loginData, setLoginData] = useState({

      "accountnumber":0,
      "password":""
  })



const onChangeHandler=(event,field)=>{
  setLoginData({...loginData,[field]:event.target.value});
}
const submitTheForm = (event) => {

  event.preventDefault();
  if(loginData.password.trim==='')
  {
    toast.warning("please fill the login details",{position:'top-center'})
    return;
  }
console.log(loginData)
  loginDetails(loginData).then((msg)=>{

    console.log("user login : "+msg);
    if(msg===true)
    {

      accNumber=loginData.accountnumber;
   
      navigate("/home",{state:{id:1,name:[loginData.accountnumber]}});
      
      // navigate("/headermanager",{state:{id:1,name:[loginData.accountnumber]}});
    toast.success(`Welcome ${loginData.accountnumber}`,{position:'top-center'}) 
    }else
    if(msg==="failed")
    {
      toast.error("Invalid account number or password",{position: 'top-center'})
    }
   
  }).catch(error=>{console.log(error)
    
    if(error.response.status===500)
    {
      toast.error("Invalid account number or password",{position:'top-center'});
    }else
    {
      toast.error(error.response.statusText);
    }

  });

  
}
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5" >
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={require('../Image/logo.jpg')}
                style={{width: '280px',height:100}} alt="logo" />

{/* <img src={require('../Image/logo.jpg')} alt="logo" style={{height:"60px" ,top:16,position:"fixed" }}/> */}
<br/>
<br/>
              <h4 className="mt-1 mb-5 pb-1">IDFC USER LOGIN PAGE</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Username' id='accountnumber' type='email'  autoComplete='off'  onChange={(e)=>{onChangeHandler(e,'accountnumber')}} value={loginData.accountnumber} />
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'  autoComplete='off' onChange={(e)=>{onChangeHandler(e,'password')}} value={loginData.password}/>


            <div className="text-center pt-1 mb-5 pb-1">
              {/* <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn> */}
             <Button className="mb-4 w-100 gradient-custom-2"  type='submit' onClick={submitTheForm}> Sign In</Button>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

        

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">About IDFC</h4>
              <p className="small mb-0">DFC First Bank is an Indian Private Sector Bank that is owned by IDFC, an integrated infrastructure finance company. The bank started operations on 1 October 2015, after receiving a universal banking licence from the Reserve Bank of India in July 2015. It is listed on BSE and NSE
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
export {accNumber};
export default Login;