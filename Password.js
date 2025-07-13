 import React , {useState} from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import "../password.css"
function Password() {
    const [word1,setword1] = useState('');
    const [word2,setword2] = useState('');
    const location = useLocation();
    const name1 = location.state?.name1;
     const name2 = location.state?.name2;
     const email = location.state?.email;

     const navigate = useNavigate();
     const password1= async(e) => {
            e.preventDefault();
            if(word1 !== word2)
                alert("Passwords are not matched!");
            const res = await axios.post('http://localhost:5000/password',{name1,name2,email,word1});
            if(res.data.status === 'ok'){
                alert("Registered Successfully!");
                navigate('/');
            }
            else
                alert(res.data.error);
     }
    return(
        <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="logo" className="logo"></img>
        <h2 id="name4">Create a Strong Password</h2>
        <form onSubmit={password1} id ="mailbox3">
        <input  type="password" id="word1" placeholder="Enter Password"  onChange={(e)=> setword1 (e.target.value)} required></input>
        <input  type="password" id="word2" placeholder="Config Password"  onChange={(e)=> setword2 (e.target.value)} required></input>
        <button type="Submit" className="nxtbutton1">Next</button>
        </form>
        </div>
    )
}
export default Password;