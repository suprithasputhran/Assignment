import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Map from "./Map"
import Login from "./Login";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
            <NavLink className="active" to="/login">Login</NavLink>
            <NavLink className="active" to="/map">Map</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/map" element={<Map/>}/>
          </Routes>
        </div>
      </Router>
  
    </div>
  );
}

export default App;
