//@ts-nocheck
import http from "./http";

export const userApi = {};

export const loginApi = {
  postNaver: async (params) => {
    try {
      const fetchNaver = await http.post("/naver/login", params);
      const naverData = await fetchNaver.data;
      return naverData;
    } catch (error) {
      console.error("postNaver[error]: ", error);
    }
  },
};

//sign in
// {
//   id: "cksdnd004@naver.com",
//   dkey: "29530692",
//   name: "문찬웅",
//   gubun: "NAVER",
// };
