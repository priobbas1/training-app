const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const endpoints = {
  getWorkoutsList: "workouts/",
  getWorkoutDetails: "workouts/:id/",
  userWorkoutsEndpoint: "workouts/:id",
  createWorkout: "workout/",
};

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
      console.log(error.response.data.message);
      return error.response;
    } else {
      console.log(res.data);
    }
  });
  return res.data;
}

/* axios
  .post(url, data, config)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

export { createWorkout };
