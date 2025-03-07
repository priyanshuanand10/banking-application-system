import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { adduserloginpass } from "../API/service";
const UserLoginPass = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const [formStatus, setFormStatus] = React.useState("Send");
  const [userAcc, setUserAcc] = useState({
    accountnumber: 0,
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
   

    adduserloginpass(userAcc)
    .then((msg) => {

        if(msg==="user password created")
        {
            navigate("/users")
            toast.success("User's Password Generated Successfully");
            setFormStatus("send");
            setUserAcc({
              accountnumber: 0,
              password: "",
            })
        }
  
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="container mt-5" style={{ width: "50%", color: "white" }}>
      <h2 className="mb-3">
        Create User Password : {location.state.accountnumber}
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="accountnumber">
            account number
          </label>
          <input
            className="form-control"
            type="number"
            id="accoutnnumber"
            required
            autoComplete="off"
            onChange={(e)=>{setUserAcc( {...userAcc,"accountnumber":e.target.value})}}
            value={userAcc.accountnumber}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="pass1">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="pass1"
            required
            autoComplete="off"
            value={userAcc.password}
            onChange={(e)=>{setUserAcc( {...userAcc,"password":e.target.value})}}
          />
        </div>

        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default UserLoginPass;
