const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const endpoints = {
  getWorkoutsList: "workouts/",
  getWorkoutDetails: "workouts/:id/",
  userWorkoutsEndpoint: "workouts/:id",
  createWorkout: "workout/",
};

//development2
async function getWorkoutsList(data) {
  const res = await axios({
    method:"get",
    url:apiUrl + endpoints.getWorkoutsList,data:{
      ejercicios:data.ejercicios
    },
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data.status);
//main
async function createWorkout(data) {
  /*  const { name, description, typology, muscle } = data; */
  /* axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "token"
  )}`; */

  const token = localStorage.getItem("token");
  const headers = new Headers({ "Content-Type": "application/json" });

  if (token) {
    headers.append("Authorization", token);
  }

  let formData = new FormData({ ...data });
  formData.append("file", data.image[0], data.image[0].name);

  console.log(data.image[0].name);

  const res = await axios({
    method: "post",
    url: apiUrl + endpoints.createWorkout,
    formData,
    /* data: {
      name: data.name,
      description: data.description,
      file: data.image[0].name,
      typology: data.typology,
      muscle: data.muscle,
    }, */
  }).catch(function (error) {
    if (error.response) {
      console.log(error);
//main
      console.log(error.response.data.message);
      return error.response;
    } else {
      console.log(res.data);
    }
  });
  return res.data;
}

//development2
*/async function getWorkoutDetails(data) {
  const res = await axios({
    method: "get",
    url: apiUrl + endpoints.getWorkoutDetails,
    data: {
      id:data.id
      
    },
  }).catch((e) => {
    console.log(e.response?.data?.status);
    console.log(e.response?.data?.message);
  });

  return res;
}
async function userWorkoutsEndpoint(data) {
  const res = await axios({
    method: "get",
    url: apiUrl + endpoints.userWorkoutsEndpoint,
    data: {
      id:data.id
      
    },
  }).catch((e) => {
    console.log(e.response?.data?.status);
    console.log(e.response?.data?.message);
  });

  return res;
}

export { getWorkoutsList, getWorkoutDetails, userWorkoutsEndpoint}*/
/* axios
  .post(url, data, config)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

export { createWorkout };
