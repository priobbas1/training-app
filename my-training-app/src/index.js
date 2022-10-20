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
import CreateWorkout from "./components/CreateWorkout";
import EditWorkout from "./components/EditWorkout";
import { WorkoutContextProviderComponent } from "./shared/context/workoutContext";
import SearchWorkout from "./components/SearchWorkout";
import WorkoutCard from "./components/WorkoutCard";
import WorkoutsFav from "./components/WorkoutsFav";
import AdminRoute from "./components/AdminRoute";
import { LoggedRoute } from "./components/NotLoggedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProviderComponent>
      <WorkoutContextProviderComponent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<App />}></Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/workouts"
                element={
                  <LoggedRoute>
                    <Workouts />
                  </LoggedRoute>
                }
              />
              <Route
                path="/create"
                element={
                  <AdminRoute>
                    <CreateWorkout />
                  </AdminRoute>
                }
              />
              <Route
                path="/edit/:workoutId"
                element={
                  <AdminRoute>
                    <EditWorkout />
                  </AdminRoute>
                }
              />
              <Route path="/search" element={<SearchWorkout />} />
              <Route path="/card/:workoutId" element={<WorkoutCard />} />
              <Route path="/workoutsFav" element={<WorkoutsFav />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WorkoutContextProviderComponent>
    </AuthContextProviderComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
