 import React , {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
 import "../home.css";
function Home(){
     const [email,setEmail] = useState('');
      const navigate = useNavigate();
       const Email = async(e) => {
            e.preventDefault();
           try {
            const res = await axios.post('http://localhost:5000/home', { email });
          if (res.data.status === 'ok') {
          const name1 = res.data.name1;
         navigate('/loginword', { state: { email, name1 } });
        } else {
      alert(res.data.error);
    }
  } catch (error) {
    alert("Something went wrong.");
  }
       };

    return(
      
        <div className="container">
        <div class="logo"><img src="https://www.bing.com/th/id/OIP.cCgiTfRDgSYZFubFQR4SSQHaEK?w=274&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo"  ></img></div>
        <div class="container2">
          <h2 id="name3">Sign in</h2>
        <h2 className="con">to continue to gmail</h2>
        <form  id ="mailbox" onSubmit={Email}>
        <input  type="email" id="email1" placeholder="Enter email" onChange={(e)=> setEmail (e.target.value)} required></input>
        
        <Link className="link1" to="./Name">Create Account</Link>
        <button type="submit" className="nxtbutton">Next</button>
        
        </form>
        </div>
        </div>
    )
}
export default Home;