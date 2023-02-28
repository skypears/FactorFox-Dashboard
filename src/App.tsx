import { useEffect, useState } from "react";
import DashboardPage from "./components/pages/Dashboard/Index";
import { Login, ForgotPassword } from "./components/pages/Login/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import "./components/styles/_all.scss";
import Cookies from 'js-cookie';
export default function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(Cookies.get("loggedIn") || "false"));
  // use cookie to store login status
  const setLogin = (data: boolean) => {
    const status = data.toString();
    Cookies.set("loggedIn", status);
    setLoggedIn(data); 
  };
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <DashboardPage isloggedIn={loggedIn} loginStatus={setLogin} />
            ) : (
              <Login loginStatus={setLogin} />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage isloggedIn={loggedIn} loginStatus={setLogin} />
          }
        />
        {!loggedIn &&
        <Route path="/forgotpassword" element={<ForgotPassword />} />}
      </Routes>
    </div>
  );
}
