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
import { AuthContextProviderComponent } from "./shared/context/authContext";
import { Logout } from "./components/Logout";
import Creation from "./components/Creation";
import Exercise from "./components/Exercise";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProviderComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<App />}></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<Creation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProviderComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
