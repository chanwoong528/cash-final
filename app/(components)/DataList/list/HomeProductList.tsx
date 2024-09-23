//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Tab from "@/app/(components)/common/Tab";
import MerchantItem from "@/app/(components)/DataList/item/MerchantItem";
import PointShopItem from "@/app/(components)/DataList/item/PointShopItem";
import HotdealItem from "@/app/(components)/DataList/item/HotdealItem";

import { PRODUCT_TYPE } from "@/app/(utils)/CONSTANT/CATEGORY";

import "./homeProductList.scss";

const HomeProductList = ({ productType, tabData, listData, showTab }) => {
  const [curTab, setCurTab] = useState("");
  const [curList, setCurList] = useState([]);

  useEffect(() => {
    switch (productType) {
      case PRODUCT_TYPE.MERCHANT:
        setCurTab(tabData[0].categCd);
        setCurList(
          listData.filter((item) => item.mainCateg === tabData[0].categCd)
        );
        break;

      case PRODUCT_TYPE.HOTDEAL:
        setCurList(listData.slice(0, 8));
        break;

      case PRODUCT_TYPE.POINT:
        setCurTab(tabData[0].categCd);
        setCurList(listData.slice(0, 10));
        break;

      default:
        break;
    }
  }, [productType]);

  const onClickNavItem = (categCd) => {
    setCurTab(categCd);

    if (productType === PRODUCT_TYPE.POINT && categCd === "popul")
      return setCurList(listData.slice(0, 10));

    setCurList(listData.filter((item) => item.mainCateg === categCd));
  };

  const renderListClass = (categCd) => {
    switch (categCd) {
      case PRODUCT_TYPE.POINT:
        return "point-list";
      case PRODUCT_TYPE.HOTDEAL:
        return "hotdeal-list";
      default:
        return "";
    }
  };

  return (
    <>
      {!!showTab ? (
        <Tab
          productType={productType}
          navData={tabData}
          onClickNavItem={onClickNavItem}
          curTab={curTab}
        />
      ) : null}

      <ul className={`table-list ${renderListClass(productType)}`}>
        {curList?.map((item, idx) => {
          switch (productType) {
            case PRODUCT_TYPE.POINT:
              return (
                <PointShopItem key={item.brandId ?? idx} itemData={item} />
              );

            case PRODUCT_TYPE.MERCHANT:
              return (
                <MerchantItem key={item.merchantId ?? idx} itemData={item} />
              );

            case PRODUCT_TYPE.HOTDEAL:
              return (
                <HotdealItem key={item.productNum ?? idx} itemData={item} />
              );
          }
        })}
      </ul>
    </>
  );
};

export default HomeProductList;
