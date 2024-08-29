
import React from "react";
import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";
import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";
import DefaultItemSlider from "@/app/(components)/common/Slider/DefaultItemSlider";

import HotdealDetailInfo from "./HotdealDetailInfo";

import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";
import { hotdealApi } from "@/app/api/(services)/apiProducts";


import "./pageHotdealDetail.scss"

async function getData(productNum: string) {
  const [hotdealItem] = await Promise.all([hotdealApi.getHotdealItem(productNum)]);

  if (hotdealItem.hotdealDTO !== undefined) {
    const categCd = hotdealItem.hotdealDTO.categoryDescDTO.categCd;
    const othersData = await hotdealApi.getHotdealOthers(categCd);
    hotdealItem.othersData = othersData;
  }


  return { hotdealItem };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  const detailInfo = data.hotdealItem.hotdealDTO?.detailInfo;

  return (
    <>
      <InnerPageNav pageType={PATH_NAME.HOTDEAL} navList={data.hotdealItem.categ1List} />
      <section className="hotdeal-detail">
        <figure>
          <ImageWithFallback
            src={data.hotdealItem.hotdealDTO?.image}
            width={450}
            height={450}
            objectFit="contain"
            alt={data.hotdealItem.hotdealDTO?.name}
          />
        </figure>
        <header>
          <div>
            <h2>{data.hotdealItem.hotdealDTO?.name}</h2>
            <div className="price-box">
              <div>
                {data.hotdealItem.hotdealDTO?.sale && (
                  <p className="percent"><em>{data.hotdealItem.hotdealDTO?.sale}</em>%</p>
                )}
                <p className="price-current"><em>{data.hotdealItem.hotdealDTO?.price}</em>원</p>
              </div>
              {data.hotdealItem.hotdealDTO?.listPrice && (
                <p className="price-org"><del>{data.hotdealItem.hotdealDTO.listPrice}</del>원</p>
              )}
            </div>
          </div>
          <button className="btn-primary">구매하기</button>
        </header>
        <HotdealDetailInfo detailInfo={detailInfo} />

        {data.hotdealItem.othersData
          ? <DefaultItemSlider
            callPage={"hotdeal"}
            title={"관련된 다른상품"}
            itemList={data.hotdealItem.othersData}
          />
          : null
        }
      </section>
    </>
  );
};

export default page;
