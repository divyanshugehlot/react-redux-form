import "./App.css";
import React from "react";
import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Userinfo from "./component/Userinfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  
  return (
    <div className="App">
    <BrowserRouter> 
    <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users-info" element={<Userinfo />} />
            <Route path="/sign-up" element={<Signup />} />
            </Routes>
 
     </BrowserRouter>
    </div>
  );
}

export default App;
