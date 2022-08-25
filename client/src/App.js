import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from './AuthProvider';
import Login from "./pages/Login";
import CreateAccount from "./pages/Login/CreateAccount";
import Home from "./pages/Home";
import MyEvent from "./pages/MyEvents";
import CreateNewEvent from "./pages/CreateNewEvent";
import PrivateRoutes from "./utils/PrivateRoute";

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
      <Route element={<PrivateRoutes/>}>
        <Route path="/home" element={<Home />}/>
        <Route path="/myEvents" element={<MyEvent />} />
        <Route path="/createNewEvent" element={<CreateNewEvent />} />
      </Route>
      <Route path="*" element={<Login/>} />
    </Routes>
  )
}

export default App;
