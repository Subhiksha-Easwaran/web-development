 import React , {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../login.css"
function Loginword() {
    const [loginpassword,setloginpassword] = useState('');
    const location = useLocation();
     const navigate = useNavigate();
     const email = location.state?.email;
     const name1 = location.state?.name1;
     const Loginpassword1 = async(e) => {
            e.preventDefault();
            const res = await axios.post('http://localhost:5000/login/loginword',{email,loginpassword});
            if(res.data.status === 'ok'){
                alert("Login Successfully!");
                navigate('/welcome');
            }
            else
                alert(res.data.error);
     }
    return(
        <div className="container">
        <img src="https://www.bing.com/th/id/OIP.cCgiTfRDgSYZFubFQR4SSQHaEK?w=274&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo" className="logo"></img>
        <h2 id="name6">Hello {name1}👋</h2>
        <form onSubmit={Loginpassword1} id ="mailbox4">
        <h4>To continue, first verify it's you</h4>
        <input  type="password" id="password" placeholder="Enter Password"  onChange={(e)=> setloginpassword (e.target.value)} required></input>
        <button type="Submit" className="loginbutton">Login</button>
        </form>
        </div>
    )
}
export default Loginword;