const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const endpoints = {
  getWorkoutsList: "workouts/",
  getWorkoutsDetails: "workouts/",
  createWorkout: "workout/",
  deleteWorkout: "workouts/",
  searchWorkout: "workout/",
};

async function getWorkoutsList() {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "get",
    url: apiUrl + endpoints.getWorkoutsList,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res;
}

async function getWorkoutDetails(id) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "get",
    url: apiUrl + endpoints.getWorkoutsDetails + 1,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res.data;
}

async function createWorkout(form) {
  const data = new FormData();
  data.append("name", form.name);
  data.append("description", form.description);
  data.append("image", form.image[0]);
  data.append("typology", form.typology);
  data.append("muscle", form.muscle);

  const token = localStorage.getItem("token");
  let headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "post",
    url: apiUrl + endpoints.createWorkout,
    headers: headers,
    data,
  }).catch((error) => {
    console.log(error);
  });
  return res;
}

async function deleteWorkout(workoutId) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  //const parseId = parseInt(id);

  const res = await axios({
    method: "delete",
    url: `${apiUrl}workout/+${workoutId}`,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res.data;
}

async function likeWorkout(workoutId) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "post",
    url: `${apiUrl}workout/like/+${workoutId}`,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res;
}

async function dislikeWorkout(workoutId) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/jshon;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "delete",
    url: `${apiUrl}workout/like/+${workoutId}`,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res;
}

async function editWorkout(form, workoutId) {
  const data = new FormData();
  data.append("name", form.name);
  data.append("description", form.description);
  data.append("image", form.image[0]);
  data.append("typology", form.typology);
  data.append("muscle", form.muscle);

  const token = localStorage.getItem("token");
  let headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "patch",
    //url: apiUrl + "workout/" + 1,
    url: `${apiUrl}workout/+${workoutId}`,
    headers: headers,
    data,
  }).catch((error) => {
    console.log(error);
  });
  return res;
}

async function searchWorkout(value, parameter) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "get",
    url: `${apiUrl}${endpoints.searchWorkout}${parameter}/${value}`,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res.data;
}

export {
  getWorkoutsList,
  getWorkoutDetails,
  createWorkout,
  deleteWorkout,
  likeWorkout,
  dislikeWorkout,
  editWorkout,
  searchWorkout,
};
