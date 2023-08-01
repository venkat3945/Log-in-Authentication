import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./New/Login";
import Register from "./New/Register";
import Homepage from "./New/Homepage";
const App = ()=>{
  return(
    <div>
      <center>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Homepage" element={<Homepage/>}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
      </Routes>
      </BrowserRouter>
      </center>
    </div>
  );
};
export default App;
