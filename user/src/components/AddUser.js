import React ,{useState} from 'react'
import { adduser } from '../API/service'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AddUserDetails = () => {

  const navigate = useNavigate();

 
   const [data, setData] = useState(
    {
      "accountnumber":0,
      "userdetails":{
          "fullnname":"",
          "age":0,
          "dob":"",
          "balance":0,
          "email":""
      },
      "address":{
          "location":"",
          "city":"",
          "state":"",
          "pin":0
      }
  }
   ) 
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()

    console.log(data);

    setFormStatus('Submitting...')
    // const { name, email, message } = e.target.elements
    // let conFom = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // }
    // console.log(conFom)
 

    adduser(data).then((msg)=>{
  
    //  console.log(msg)
    setData(
      {
        "accountnumber":0,
        "userdetails":{
            "fullnname":"",
            "age":0,
            "dob":"",
            "balance":0,
            "email":""
        },
        "address":{
            "location":"",
            "city":"",
            "state":"",
            "pin":0
        }
    }

    );
    navigate("/userloginpass",{state:{id:1,accountnumber:[data.accountnumber]}});
    toast.success("User Added Successsfully ",{position:'top-center'});
    setFormStatus('send')
  
     
    }).catch(error=>{console.log(error)
      
      if(error.response.status===500)
      {
        toast.error("Invalid Username or password",{position:'top-center'});
      }else
      {
        toast.error(error.response.statusText);
      }
  
    });
  
  
  
  }

  const onChangeHandler=(event,field)=>{
     setData({...data,[field]:event.target.value});
  }

  return (
    <div className="container mt-5"  style={{
        height: "60vh",
        width:"70%",
        borderRadius:"10px",
        position: "relative",
        backgroundColor: "",
        overflow: "scroll",
        overflowX: "hidden",
        color:"white",
        float:"right",
        paddingRight:"500px",
        // paddingBottom:"50px"

      }}>
      <h2 className="mb-3">Add User</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="accnumber">
            Account Number 
          </label>
          <input className="form-control" type="number" id="accnumber" required autoComplete='off'  onChange={(e)=>{onChangeHandler(e,'accountnumber')}} value={data.accountnumber} min={10000000001} max={9999999999999999}/>
        </div>
        <h4 className="mb-3">User Details</h4>
        <div className="mb-3">
          <label className="form-label" htmlFor="fullnname">
          Full Name
          </label>
          <input className="form-control" type="text" id="fullnname" required autoComplete='off'  onChange={(e)=>{setData({...data,userdetails:{...data.userdetails, 'fullnname':e.target.value}})}} value={data.userdetails.fullnname} />
        </div>


        <div className="mb-3">
          <label className="form-label" htmlFor="age" >
            Age
          </label>
          {/* <textarea className="form-control" id="age" required placeholder='write your issue here' rows={7} /> */}
          <input className="form-control" type="number" id="age" required autoComplete='off'  onChange={(e)=>{setData({...data,userdetails:{...data.userdetails, 'age':e.target.value}})}} value={data.userdetails.age} min={18} max={80}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="dob"  >
            DOB
          </label>
          {/* <textarea className="form-control" id="age" required placeholder='write your issue here' rows={7} /> */}
          <input className="form-control" type="date" id="dob"     onChange={(e)=>{setData({...data,userdetails:{...data.userdetails, 'dob':e.target.value}})}}  value={data.userdetails.dob} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="balance">
            Balance
          </label>
          <input className="form-control" type="number" id="balance" required autoComplete='off'   onChange={(e)=>{setData({...data,userdetails:{...data.userdetails, 'balance':e.target.value}})}}  value={data.userdetails.balance} min={15000}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required autoComplete='off'    onChange={(e)=>{setData({...data,userdetails:{...data.userdetails, 'email':e.target.value}})}}  value={data.userdetails.email}/>
        </div>
        <h4 className="mb-3">Address</h4>
        <div className="mb-3">
          <label className="form-label" htmlFor="location">
            Location
          </label>
          <input className="form-control" type="text" id="location" required autoComplete='off'  onChange={(e)=>{setData({...data,address:{...data.address, 'location':e.target.value}})}}  value={data.address.location}  />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input className="form-control" type="text" id="city" required autoComplete='off'  onChange={(e)=>{setData({...data,address:{...data.address, 'city':e.target.value}})}}  value={data.address.city} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="state">
            State
          </label>
          <input className="form-control" type="text" id="state" required autoComplete='off'  onChange={(e)=>{setData({...data,address:{...data.address, 'state':e.target.value}})}}  value={data.address.state} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="pin">
            PIN
          </label>
          <input className="form-control" type="number" id="pin" required autoComplete='off'  onChange={(e)=>{setData({...data,address:{...data.address, 'pin':e.target.value}})}}  value={data.address.pin} min={100001} max={999999}/>
        </div>

     
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default AddUserDetails