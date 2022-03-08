import { customAxios } from "./customAxios";

export const countries = {
  getAll: (params) => {
    const url = "/summary";
    return customAxios.get(url, params);
  },

  getDetailDailyData: (params) => {
    const url = "/country";
    return customAxios.get(`${url}/${params}`);
  },
};
