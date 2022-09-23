const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const endpoints = {
  userEndpoint: "accounts/",
  userWorkoutsEndpoint: "workouts/",
  login: "login/",
};

async function createAccount(data) {
  const res = await axios({
    method: "post",
    url: apiUrl + endpoints.userEndpoint,
    data: {
      email: data.email,
      password: data.password,
    },
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data.status);
      console.log(error.response.data.message);
    } else {
      console.log(res.data);
    }
  });
}

export { createAccount };
