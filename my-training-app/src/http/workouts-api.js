const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const endpoints = {
  getWorkoutsList: "workouts/",
  getWorkoutDetails: "workouts/:id/",
  userWorkoutsEndpoint: "workouts/:id",
};

async function getWorkoutsList(data) {
  const res = await axios({
    method:"get",
    url:apiUrl + endpoints.getWorkoutsList,data:{
      ejercicios:data.ejercicios
    },
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data.status);
      console.log(error.response.data.message);
      return error.response;
    } else {
      console.log(res.data);
    }
  });
  return res.data;
}

async function getWorkoutDetails(data) {
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

export { getWorkoutsList, getWorkoutDetails, userWorkoutsEndpoint}
