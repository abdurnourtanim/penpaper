import axios from "axios";

const baseURL = "http://localhost:4000/api";
// signup request
const signup = (newUser) => {
  return axios
    .post(`${baseURL}/signup`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login request
const login = (userInfo) => {
  return axios
    .post(`${baseURL}/login`, userInfo)
    .then((response) => {
      const token = response.data.token;
      const userId = response.data.user?._id;
      if (token) {
        localStorage.setItem("x-access-token", token);
        localStorage.setItem("userId", userId);
      }

      return Promise.resolve(response.data);
    })
    .catch((error) => Promise.reject(error.response.data));
};

// logout user
const logout = () => {
  localStorage.removeItem("x-access-token");
  localStorage.removeItem("userId");
  return { msg: "Logout successfull." };
};

// update user
const updateUser = (updatedUserInfo) => {
  const { userId, username, phone, photo } = updatedUserInfo;
  return axios
    .put(`${baseURL}/updateUser/${userId}`, {
      username,
      phone,
      photo,
    })
    .then((response) => {
      if (response) {
        return Promise.resolve(response.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { signup, login, logout, updateUser };
