 import axios from 'axios';
 import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../mail.css"
function Mail(){
    const [email,setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
     const name1 = location.state?.name1;
     const name2 = location.state?.name2;
     const mail1= async(e) => {
            e.preventDefault();
            await axios.post('http://localhost:5000/mail',{email});
            navigate('/password',{ state: { name1, name2, email } });
     }
    return(
        <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="logo" className="logo"></img>
        <h2 id="name5">How You'll Sign In</h2>
         <h2 className="con2">Create a Gmail address </h2>
        <form onSubmit = {mail1} id ="mailbox2">
        <input  type="email" id="email" placeholder="Enter MailID" onChange={(e)=> setEmail (e.target.value)} required></input>
        <button type="submit" className="nxtbutton3">Next</button>
        </form>
        </div>
    )
}
export default Mail;