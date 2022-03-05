import axios from "axios";
import queryString from "query-string";

export const customAxios = axios.create({
  baseURL: 'https://api.covid19api.com',
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
