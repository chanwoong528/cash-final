//@ts-nocheck
import InnerPageNav from "@/app/(components)/common/Nav/InnerPageNav";
import { pointShopApi } from "@/app/api/(services)/apiProducts";
import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";

async function getData() {
  const pointShopNavData = await pointShopApi.getPointShopNav();
  return {
    category1List: pointShopNavData.categ1List,
  };
}

export default async function PointLayout({
  children,
  searchParams,
}: {
  children: React.ReactNode;
}) {
  const { category1List } = await getData(searchParams);
  return (
    <>
      <InnerPageNav pageType={PATH_NAME.POINT} navList={category1List} />
      {children}
    </>
  );
}
