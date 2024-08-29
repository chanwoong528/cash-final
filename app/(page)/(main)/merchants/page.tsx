import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";
import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";
import { merchantApi } from "@/app/api/(services)/apiProducts";

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

      <main>
        marchat
      </main>
    </>
  );
}
