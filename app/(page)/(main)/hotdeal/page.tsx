//@ts-nocheck
import Image from "next/image";

import { productsApi } from "@/app/api/(services)/apiProducts";
import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";

import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";
import HotdealList from "@/app/(components)/DataList/list/HotdealList";
import PaginationDefault from "@/app/(components)/common/Pagination/PaginationDefault";

import "./pageHotdeal.scss";

async function getData(searchParams) {
  let params = {
    cpage: searchParams.cpage || 1,
    itemPage: searchParams.itemPage || 1,
    categCd: searchParams.categCd || null,
  };
  const hotDealDetailData = await productsApi.getDetailList(PATH_NAME.HOTDEAL, params);

  console.log(hotDealDetailData.hotdealList?.pageable)

  return {
    subCategories: hotDealDetailData?.categ1List,
    itemList: hotDealDetailData.hotdealList?.contents,
    paginationData: hotDealDetailData.hotdealList?.pageable,
    totalPages: hotDealDetailData.hotdealList?.totalPages
  };
}

export default async function HotdealPage({ searchParams }) {
  const {
    subCategories,
    itemList,
    paginationData,
    totalPages,
  } = await getData(searchParams);



  return (
    <>
      <InnerPageNav pageType={PATH_NAME.HOTDEAL} navList={subCategories} />

      <main className="hotdeal-main">

        {/* TOP Banner */}
        <header className="cn-banner">
          <h2>
            <Image
              src={"/asset/images/hotdeal-banner.png"}
              objectFit="cover"
              fill={true}
              alt={"MD 추천 잇템!"}
            />
          </h2>
        </header>
        {/* TOP Banner */}

        <article className="hotdeal-list-con">
          <HotdealList hotdealList={itemList} />
          <PaginationDefault
            paginationData={paginationData}
            totalPages={totalPages}
          />
        </article>



      </main>
    </>
  );
}
