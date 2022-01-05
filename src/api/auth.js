import axios from "./axiosConfig";

export const getServerPublicKey = () => {
  return axios.get("/publickeys");
};

export const createNewSession = (data) => {
  return axios.put("/sessions/session/new", data);
};

export const pwlLogin = (data) => {
  return axios.post("/session/response/fetch", data);
};

export const verifyUser = (data) => {
  return axios.post("/verifyuser", data);
};
