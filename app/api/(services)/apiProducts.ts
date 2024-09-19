//@ts-nocheck
import http from "./http";

export const productsApi = {
  getDetailList: async (urlGubun, params) => {
    const fetchDetailList = await http.get(`${urlGubun}/list`, {
      params: params,
    });

    if (fetchDetailList.code === 200) {
      let data = await fetchDetailList.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },

  getProductData: async (urlGubun, params) => {
    const fetchMallList = await http.get(
      `/main/${urlGubun}`,
      {},
      {
        params: params,
      }
    );
    if (fetchMallList.code === 200) {
      let data = await fetchMallList.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
};

export const hotdealApi = {
  getHotdealItem: async (productNum) => {
    const fetchHotdealDetail = await http.get(`/hotdeal/view`, {
      params: { productNum: productNum },
    });
    if (fetchHotdealDetail.code === 200) {
      let data = await fetchHotdealDetail.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
  getHotdealOthers: async (categCd) => {
    const fetchHotdealOthers = await http.get(`/hotdeal/others`, {
      params: { categCd: categCd },
    });
    if (fetchHotdealOthers.code === 200) {
      let data = await fetchHotdealOthers.data;
      const results = data.hotdealList?.map((el) => {
        return {
          productNum: el.productNum,
          name: el.name,
          categCd: categCd,
          originPrice: el.listPrice,
          salePrice: el.price,
          imgLink: el.image,
          sale: Number(el.sale),
        };
      });
      return results.slice(0, 10);
    } else {
      return { message: "500 error" };
    }
  },
};

export const merchantApi = {
  getMerchantData: async (params) => {
    const fetchMallPage = await http.get(`/merchant/list/lvl1`, {
      params: params,
    });
    if (fetchMallPage.code === 200) {
      const data = await fetchMallPage.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
  getShoppingMallDetail: async (params) => {
    const fetchMallDetail = await http.get(`/merchant/view`, {
      params: params,
    });
    if (fetchMallDetail.code === 200) {
      const data = await fetchMallDetail.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
  getShoppingMallPage: async (params) => {
    const fetchMallDetail = await http.get(`/merchant/view`, {
      params: params,
    });
    if (fetchMallDetail.code === 200) {
      const data = await fetchMallDetail.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
};

export const pointShopApi = {
  getPointShopDetail: async (level, params) => {
    const fetchPointshop = await http.get(`/pointshop/home/${level}`, {
      params: params,
    });

    if (fetchPointshop.code === 200) {
      let data = await fetchPointshop.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
  getDetailList: async (urlGubun, params) => {
    const fetchDetailList = await http.get(`${urlGubun}/list`, {
      params: params,
    });

    if (fetchDetailList.code === 200) {
      let data = await fetchDetailList.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },

  getPointShopNav: async () => {
    const fetchPointshop = await http.get("/pointshop/home", {});

    if (fetchPointshop.code === 200) {
      let data = await fetchPointshop.data;
      return data;
    } else {
      return { message: "500 error" };
    }
  },
};
