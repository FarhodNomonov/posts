import axios from "axios";
export const _URL = "https://tours.techdatasoft.uz/api/";

export const getRequest = async (url, token) => {
  const { data } = await axios.get(`${_URL + url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data ?? [];
};

export const postRequest = async (url, data) => {
  return await axios.post(`${_URL}` + url, data);
};
