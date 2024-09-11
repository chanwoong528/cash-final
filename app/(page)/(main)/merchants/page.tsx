//@ts-nocheck

import Image from "next/image";

import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";
import DefaultItemSlider from "@/app/(components)/common/Slider/DefaultItemSlider";


import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";
import { merchantApi } from "@/app/api/(services)/apiProducts";

import "./pageMerchant.scss";
import MerchantListWrap from "./MerchantListWrap";

async function getData(searchParams) {
  let params = {
    categCd: searchParams.categCd || null,
  };
  //if directly passing searchParams, to below api call, it will refresh the page for some reason
  const shoppingMallData = await merchantApi.getMerchantData(params);

  return {
    category1List: shoppingMallData.categ1List,
    category2List: shoppingMallData.category2List,
    popmerchantList: shoppingMallData.popmerchantList,
    merchantList: shoppingMallData.merchantList
  }
}


export default async function Home({ searchParams }) {

  const { merchantList, popmerchantList, category1List, category2List } = await getData(searchParams);



  return (
    <>
      <InnerPageNav pageType={PATH_NAME.MERCHANT} navList={category1List} />

      <main className="merchant-main">

        <header className="cn-banner">
          <h2>
            <Image
              src={"/asset/images/shopping-banner.png"}
              objectFit="cover"
              fill={true}
              alt={"MD 추천 잇템!"}
            />
          </h2>
        </header>


        <article className="merchant-list-con">
          <h3>인기브랜드</h3>

          <DefaultItemSlider itemList={popmerchantList} callPage={"shopping"} />
        </article>
        <div className='main-shopping-table'>
          <MerchantListWrap itemList={merchantList} navList2nd={category2List} />
        </div>

      </main>
    </>
  );
}
