//  import './App.css';
import Home from './pages/Home';
import Name from './pages/Name';
import Mail from './pages/Mail';
import Password from'./pages/Password';
import Loginword from'./pages/Loginword';
import Welcome from'./Welcome';
// import "../external.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/name" element ={<Name/>}/>
        <Route path="/mail" element ={<Mail/>}/>
        <Route path="/password" element ={<Password/>}/>
        <Route path="/loginword" element={<Loginword/>}/>
        <Route path="/welcome" element ={<Welcome/>}/>
      </Routes>
    </Router>
  );
}

export default App;