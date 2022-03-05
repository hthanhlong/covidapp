import { customAxios } from "./customAxios";

export const countries = {
  getAll: (params) => {
    const url = "/summary";
    return customAxios.get(url, params);
  },
};
