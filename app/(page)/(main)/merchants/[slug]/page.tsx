//@ts-nocheck
import Link from "next/link";


import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";
import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";


import { merchantApi } from "@/app/api/(services)/apiProducts";
import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";

import "./pageMerchantDetail.scss";

async function getData(merchantId, searchParams) {

  const [shoppingMallItem, shoppingMallData] = await Promise.all([
    merchantApi.getShoppingMallDetail({ merchantId: merchantId }),
    merchantApi.getMerchantData(searchParams)
  ]);

  return {
    shoppingMallItem: shoppingMallItem.merchantDTO,
    category1List: shoppingMallData.categ1List,
  };
}

const page = async ({ params, searchParams }: { params: { slug: string } }) => {

  const { shoppingMallItem, category1List } = await getData(params.slug, searchParams);

  const shopInfo = await shoppingMallItem;

  const htmlDecode = (content) => content.replace(/\n/g, "<br/>")


  return (
    <>
      <InnerPageNav pageType={PATH_NAME.SHOPPING} navList={category1List} />

      <main className='main-shop-detail'>
        <section>
          <div className='main-shop-detail-header-wrap'>
            <header className='main-shop-detail-header'>
              <div className='img-con'>
                <ImageWithFallback
                  src={shopInfo.imageLink}
                  objectFit="contain"
                  width={120}
                  height={55}
                  alt=""
                />
              </div>
              <div className='info-con'>
                <h3>
                  {shopInfo.siteName}
                </h3>
                <p className="sales-desc">최대 {shopInfo.commissionComment}</p>
              </div>
            </header>
            <div className='btn-con'>
              <button className='like-btn'>heart</button>
              <Link className='link-to-mall' href={shopInfo.deeplink} target='__blank'>쇼핑하기</Link>
            </div>
          </div>

          <div className='brand-info-con'>
            <p>브랜드 소개</p>
            <div
              className='text-inner'
              dangerouslySetInnerHTML={{ __html: htmlDecode(shopInfo.checkComment) }}
            />
          </div>

          <div className='brand-info-con'>
            <p>유의사항</p>
            <div
              className='text-inner'
              dangerouslySetInnerHTML={{ __html: htmlDecode(shopInfo.adviceComment) }}
            />
          </div>

        </section>

      </main>
    </>
  );
};

export default page;
