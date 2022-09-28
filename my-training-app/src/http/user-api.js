const axios = require("axios");

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const endpoints = {
  createAccount: "accounts/",
  loginAccount: "auth/",
};

async function createAccount(data) {
  const res = await axios({
    method: "post",
    url: apiUrl + endpoints.createAccount,
    data: {
      email: data.email,
      password: data.password,
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

async function loginAccount(data) {
  const res = await axios({
    method: "post",
    url: apiUrl + endpoints.loginAccount,
    data: {
      email: data.email,
      password: data.password,
    },
  }).catch((e) => {
    console.log(e.response?.data?.status);
    console.log(e.response?.data?.message);
  });

  return res;
}

export { createAccount, loginAccount };
