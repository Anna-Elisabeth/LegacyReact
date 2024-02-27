
import './App.css';
import Home from './Components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';




function App() {
 
  return (
  
      <header>
  
        <Router>

  
          <Routes>
  
            <Route path="/" element={<Home/>} />
  
            {/* <Route path="/Items" element={<Items/>} />
  
            <Route path="/Cart" element={<Cart/>} />
  
            <Route path="/About us" element={<AboutUs/>} /> */}
  
          </Routes>
  
        </Router>
  
      </header>
  
    );
  
  }
  
  export default App;