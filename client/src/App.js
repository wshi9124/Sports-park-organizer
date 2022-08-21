import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./Login/CreateAccount";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/createAccount" element={<CreateAccount />} />
  </Routes>
  );
}

export default App;
