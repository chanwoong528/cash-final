//@ts-nocheck
import axios from "axios";
//let accToken = localStorage.getItem("accToken");
export const baseUrl = "https://test-api.cashnamu.com/cn";
const customAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// customAxios.interceptors.request.use((config) => {
//   let token = localStorage.getItem("accToken");
//   config.headers["x-access-token"] = token;
//   return config;
// });

customAxios.interceptors.response.use(
  async (response) => {
    return { code: 200, data: response.data };
  },
  async (error) => {
    const originalRequest = error.config;
    // if (error.response.status === 408) {
    //   const refToken = localStorage.getItem("refToken");
    //   const res = await axios.post(`${baseUrl}/auth/token`, {
    //     refToken,
    //   });
    //   localStorage.setItem("accToken", res.data.accToken);
    //   originalRequest.headers["x-access-token"] = res.data.accToken;
    //   customAxios.defaults.headers.common["x-access-token"] = res.data.accToken;
    //   return axios(originalRequest);
    // }
    return { code: 500, error: Promise.reject(error) };
  }
);
export default customAxios;
