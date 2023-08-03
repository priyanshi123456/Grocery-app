import Aboutpage from './pages/Aboutpage';
import Contactus from './pages/Contactus';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import Productdetails from './pages/Productdetails';
import Productpage from './pages/Productpage';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Regitrationpage from './pages/Regitrationpage';
import Login from './pages/Login';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/Register" element = {<Regitrationpage/>}/>
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/products/:catId" element = {<Productpage/>}/>
      <Route path="/products/details/:id" element = {<Productdetails/>}/>
      <Route path="/contact" element = {<Contactus/>}/>
      <Route path="/about" element = {<Aboutpage/>}/>
      <Route path="*" element = {<Errorpage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
