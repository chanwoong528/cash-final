import PointShopDetailList from "@/app/(components)/DataList/list/PointShopDetailList";
import PointShopProductList from "@/app/(components)/DataList/list/PointShopProductList";

import { pointShopApi } from "@/app/api/(services)/apiProducts";

import "./pagePointDetail.scss";

async function getData({
  searchParams,
}: {
  searchParams: {
    cateCd: string;
    categCd_lvl2: string;
    brandId: string;
    categCd: string;
    cpage: string;
  };
}) {
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
    categCd_lvl2: searchParams.categCd_lvl2 || null,
  };


  const pointDetailData = await pointShopApi.getPointShopDetail(
    searchParams.categCd_lvl2,
    params
  );

  const pointDetailBrandData = await pointShopApi.getDetailList(
    "/pointshop/item",
    {
      categCd: searchParams.categCd,
    }
  );

  let pageTitle;
  switch (params.categCd) {
    case "PS_PRODUCT":
      pageTitle = "상품권/쿠폰";
      break;
    case "PS_FOOD":
      pageTitle = "Food";
      break;
    case "PS_CONV":
      pageTitle = "편의점";
      break;
    default:
      pageTitle = "";
      break;
  }

  const categCd_lvl2_List = pointDetailData.pointshopList.contents.map(
    (el: {
      brandId: string;
      brandName: string;
      categCd: string;
      imgLink: string;
      image: string;
    }) => {
      el.image = el.imgLink;
      return el;
    }
  );

  return {
    pageTitle: pageTitle,
    categCd_lvl2: {
      totalPages: pointDetailData.pointshopList.totalPages,
      pageable: pointDetailData.pointshopList.pageable,
      contentList: categCd_lvl2_List,
    },
    brandItem: {
      totalPages: pointDetailBrandData.pointshopItemList.totalPages,
      pageable: pointDetailBrandData.pointshopItemList.pageable,
      contentList: pointDetailBrandData.pointshopItemList.contents,
    },
  };
}

const page = async ({
  searchParams,
}: {
  searchParams: {
    cateCd: string;
    categCd_lvl2: string;
    brandId: string;
    categCd: string;
    cpage: string;
  };
}) => {
  const detailInfo = await getData({ searchParams });

  return (
    <>
      <main className="point-detail-main">
        <h3 className="point-detail-main-header">{detailInfo.pageTitle}</h3>
        <PointShopDetailList listData={detailInfo.categCd_lvl2} />
        <PointShopProductList listData={detailInfo.brandItem} />
      </main>
    </>
  );
};

export default page;
