import axios from "axios";
const BASE_URL = "http://localhost:3003";

export const getCategoryService = async () => {
  console.log("service");
  return axios.get(BASE_URL + "/categories");
};
