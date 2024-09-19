//@ts-nocheck
import Image from "next/image";
import Link from "next/link";

import { productsApi } from "@/app/api/(services)/apiProducts";
import { PRODUCT_TYPE, PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";

import HomeProductList from "@/app/(components)/DataList/list/HomeProductList";

import "./pageHome.scss";

async function getData() {
  [].forEach(() => {
    console.log("test");
  });
  let params = {
    pageNumber: 1,
    pageSize: 1,
  };

  const [merchantData, hotDealData, pointShopData] = await Promise.all([
    await productsApi.getProductData("merchants", params),
    await productsApi.getProductData("hotdeals", params),
    await productsApi.getProductData("pointshops", params),
  ]);
  return { merchantData, hotDealData, pointShopData };
}

export default async function Home() {
  const { merchantData, hotDealData, pointShopData } = await getData();

  // const onClickNavItem = (categCd) => { }

  return (
    <main>
      <article className="main-jumbo">
        <Image
          width={1200}
          height={485}
          src="/asset/images/main-jumbo.png"
          alt="main-jumbo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </article>

      <section className={`itemtable color`}>
        <header>
          <h2>쇼핑몰</h2>
          <p>쇼핑할때마다 캐시백이 최대 20%</p>
        </header>

        <HomeProductList
          productType={PRODUCT_TYPE.MERCHANT}
          tabData={merchantData.categList}
          listData={merchantData.merchantList}
          showTab
        />
        <Link className="more-btn" href={PATH_NAME.SHOPPING}>
          쇼핑몰 전체보기
        </Link>
      </section>

      <article className="main-banner">
        <h2>
          <Image
            src={"/asset/images/event-banner.png"}
            objectFit="cover"
            fill={true}
            alt={"MD 추천 잇템!"}
          />
        </h2>
      </article>

      <section className={`itemtable`}>
        <header>
          <h2>MD추천 핫 딜 상품</h2>
        </header>
        <HomeProductList
          productType={PRODUCT_TYPE.HOTDEAL}
          listData={hotDealData.hotdealList}
        />
        <Link className="more-btn" href={PATH_NAME.HOTDEAL}>
          핫 딜 상품 전체보기
        </Link>
      </section>

      <section className={`itemtable`}>
        <header>
          <h2>포인트 샵 </h2>
        </header>
        <HomeProductList
          productType={PRODUCT_TYPE.POINT}
          tabData={pointShopData.categList}
          listData={pointShopData.pointshopList}
          showTab
        />

        <Link className="more-btn" href={PATH_NAME.POINT}>
          포인트샵 전체보기
        </Link>
      </section>
    </main>
  );
}
