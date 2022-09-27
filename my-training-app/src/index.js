import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Root from "./components/Root";
import Login from "./components/Login";
import Workouts from "./components/Workouts";
import { AuthProvider } from "./shared/context/authContext";
import { NotLoggedRoute, LoggedRoute } from "./components/NotLoggedRoute";
import { Logout } from "./components/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<App />}></Route>
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <NotLoggedRoute>
                  <Login />
                </NotLoggedRoute>
              }
            />
            <Route
              path="/workouts"
              element={
                <LoggedRoute>
                  <Workouts />
                </LoggedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <LoggedRoute>
                  <Logout />
                </LoggedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();