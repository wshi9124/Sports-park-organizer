import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from './AuthProvider';
import HomePage from "./HomePage";
import Login from "./Login";
import CreateAccount from "./Login/CreateAccount";

function App() {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  
  // Auto Login
  useEffect(()=>{
    fetch('/me')
    .then(res => {

      if(res.ok) {
        res.json()
        .then(data => {
          setUser(data)
          navigate('/home')
        })
      }

    })
  //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/createAccount" element={<CreateAccount />} />
    <Route path="/home" element={<HomePage />}/>
  </Routes>
  )
}

export default App;
