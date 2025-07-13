 import React , {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
 import "../name.css"

function Name(){
    const [name1,setName1] = useState('');
    const [name2,setName2] = useState('');
    const navigate = useNavigate();
    const Username = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/name',{name1,name2});
        navigate('/mail', { state: { name1, name2 } });
    }    
    return(
        <div className="container">
         <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="logo" className="logo"></img> 
        <h2 id="name7">Create a Google account</h2>
        <h2 className="con7">Enter Name</h2>
        <form onSubmit={Username} id ="mailbox1">
        <input  type="text" id="name1" placeholder="Enter FirstName" onChange={(e)=> setName1 (e.target.value)} required></input>
        <input  type="text" id="name2" placeholder="Enter LastName" onChange = {(e)=> setName2 (e.target.value)} required></input>
        <button type="Submit" className="nxtbutton1">Next</button>
        </form>
        </div>
    )
}
export default Name;