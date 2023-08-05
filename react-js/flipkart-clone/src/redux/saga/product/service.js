import axios from "axios";
const BASE_URL = "http://localhost:3003/api";

export const getCategoryService = async () => {
  return axios.get(BASE_URL + "/categories");
};

export const getProductsService = async (id) => {
  return axios.get(BASE_URL + "/get-products/" + id);
};
