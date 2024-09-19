//@ts-nocheck

import Image from "next/image";

import { pointShopApi } from "@/app/api/(services)/apiProducts";

import DefaultItemSlider from "@/app/(components)/common/Slider/DefaultItemSlider";
import PointList from "@/app/(components)/DataList/list/PointList";

import "./pagePoints.scss";

async function getData(searchParams) {
  let params = {
    categCd: searchParams.categCd || null,
  };

  const pointShopNavData = await pointShopApi.getPointShopNav(params);

  return {
    category1List: pointShopNavData.categ1List,
    populpointshopList: pointShopNavData.populpointshopList,
    itemListPsProduct: pointShopNavData.pointshopList.PS_PRODUCT,
    itemListPsConv: pointShopNavData.pointshopList.PS_CONV,
    itemListPsFood: pointShopNavData.pointshopList.PS_FOOD,
    foodNavList: pointShopNavData.categ2List.PS_FOOD,
  };
}

export default async function Home({ searchParams }) {
  const {
    populpointshopList,
    itemListPsProduct,
    itemListPsConv,
    itemListPsFood,
    foodNavList,
  } = await getData(searchParams);
  return (
    <>
      <main className="points-main">
        {/* TOP Banner */}
        <header className="cn-banner">
          <h2>
            <Image
              src={"/asset/images/pointshop-banner.png"}
              objectFit="cover"
              fill={true}
              alt={"쇼핑으로 쌓은 캐시 쿠폰으로 돌려받자"}
            />
          </h2>
        </header>
        {/* TOP Banner */}

        <article className="points-list-con">
          <h3>인기브랜드</h3>

          <DefaultItemSlider
            itemList={populpointshopList}
            callPage="bestBrand"
            title={undefined}
          />

          <div className="pointshop-table-wrap first">
            <PointList categCd="PS_PRODUCT" data={itemListPsProduct} />
          </div>

          <div className="pointshop-table-wrap bg-g">
            <PointList categCd="PS_CONV" data={itemListPsConv} />
          </div>
          <div className="pointshop-table-wrap">
            <PointList
              withNav
              categCd="PS_FOOD"
              data={itemListPsFood}
              navData={foodNavList}
            />
          </div>
        </article>
      </main>
    </>
  );
}
