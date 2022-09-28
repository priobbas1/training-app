const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const endpoints = {
  getWorkoutsList: "workouts/",
  getWorkoutDetails: "workouts/:id/",
  userWorkoutsEndpoint: "workouts/:id",
};
