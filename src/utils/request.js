import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getRequest = async (url) => {
  return await axios.get(`${BASE_URL}` + url);
};

export const deleteRequest = async (url) => {
  return await axios.delete(`${BASE_URL}` + url);
};
