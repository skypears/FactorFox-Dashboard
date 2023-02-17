import React from "react";
import DashboardPage from "./components/pages/Dashboard/Index";
import {Login, ForgotPassword} from "./components/pages/Login/Index";
import { Routes, Route } from "react-router-dom";
import "./components/styles/_all.scss";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="login" element={<Login  />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}
