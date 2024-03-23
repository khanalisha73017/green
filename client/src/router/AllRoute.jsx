import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../page/Login";
import { SignUp } from "../page/SignUp";
import { Home } from "../component/Home";

export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />

      <Route path="/dashboard" element={<Home/>} />
    </Routes>
  );
};
