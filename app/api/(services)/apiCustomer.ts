//@ts-nocheck
import http from "./http";

export const customerApi = {
  getNotices: async () => {
    try {
      const fetchNotices = await http.get("/notice/list");
      const noticesData = await fetchNotices.data;
      return noticesData;
    } catch (error) {
      console.error("getNotices[error]: ", error);
    }
  },
  getNotice: async (params) => {
    try {
      const fetchNotice = await http.get("/notice/view", { params: params });
      const noticeData = await fetchNotice.data;
      return noticeData;
    } catch (error) {}
  },
  getFaqs: async (params) => {
    try {
      const fetchFaqs = await http.get("/faq/list", { params: params });
      const faqsData = await fetchFaqs.data;
      return faqsData;
    } catch (error) {}
  },
};
