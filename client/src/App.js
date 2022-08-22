import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import CreateAccount from "./Login/CreateAccount";
function App() {
  //Auto Login
  // useEffect(()=>{
  //   fetch('/auth')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(user => setCurrentUser(user))
  //     }
  //   })
  // },[])
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/createAccount" element={<CreateAccount />} />
    <Route path="/home" element={<HomePage />}/>
  </Routes>
  );
}

export default App;
