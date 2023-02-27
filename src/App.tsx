import { useState } from "react";
import DashboardPage from "./components/pages/Dashboard/Index";
import {Login, ForgotPassword} from "./components/pages/Login/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import "./components/styles/_all.scss";
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const callback = (data: boolean) => {
    setLoggedIn(data)
  };
  return (
    <div className="App">
      <Routes>
        //if logged in, redirect to dashboard else to login
        {loggedIn ? (
          <>
            <Route path="/" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login callback={callback} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
          </>
        )}
      </Routes>
    </div>
  );
}
