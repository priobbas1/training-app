const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const endpoints = {
  getWorkoutsList: "workouts/",
  getWorkoutDetails: "workouts/",
  createWorkout: "workout/",
  deleteWorkout: "workouts/",
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
  return res.data;
}

async function getWorkoutDetails(id) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "get",
    url: apiUrl + endpoints.getWorkoutsDetails + id,
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
  return res.data;
}

async function deleteWorkout(id) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "delete",
    url: apiUrl + endpoints.getWorkoutsList + id,
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res.data;
}

async function likeWorkout(id) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "post",
    url: apiUrl + "workout/" + 6 + "/like",
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res.data;
}

async function dislikeWorkout(id) {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };

  const res = await axios({
    method: "delete",
    url: apiUrl + "workout/" + 6 + "/like",
    headers: headers,
  }).catch((error) => {
    console.log(error);
  });
  return res.data;
}

async function editWorkout(form) {
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
    url: apiUrl + "workout/" + 6,
    headers: headers,
    data,
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
};
