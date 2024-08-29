import Image from "next/image";
import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";

import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";
import { pointShopApi } from "@/app/api/(services)/apiProducts";

import "./pagePoints.scss";
import DefaultItemSlider from "@/app/(components)/common/Slider/DefaultItemSlider";

async function getData() {
  let params = {
    // categCd: searchParams.categCd || null,
  };
  //if directly passing searchParams, to below api call, it will refresh the page for some reason
  const pointShopNavData = await pointShopApi.getPointShopNav();

  console.log(pointShopNavData)

  // pointshopList > PS_FOOD


  return {
    category1List: pointShopNavData.categ1List,
    populpointshopList: pointShopNavData.populpointshopList
  }
}

export default async function Home() {
  const { category1List, populpointshopList } = await getData();
  return (
    <>
      <InnerPageNav pageType={PATH_NAME.POINT} navList={category1List} />

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

          <DefaultItemSlider itemList={populpointshopList} callPage="bestBrand" title={undefined} />
        </article>



        point
      </main>
    </>
  );
}
