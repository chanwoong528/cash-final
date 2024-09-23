//@ts-nocheck
import http from "./http";

export const userApi = {};

export const loginApi = {
  postNaver: async (params) => {
    try {
      const fetchNaver = await http.post(
        "/naver/login/response",
        {},
        { params }
      );
      const naverData = await fetchNaver.data;
      return naverData;
    } catch (error) {
      console.error("postNaver[error]: ", error);
    }
  },
  postKakao: async (params) => {
    try {
      const fetchKakao = await http.post(
        "/kakao/login/response",
        {},
        { params }
      );
      const kakaoData = await fetchKakao.data;
      return kakaoData;
    } catch (error) {
      console.error("postKakao[error]: ", error);
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
