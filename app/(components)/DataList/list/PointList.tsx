//@ts-nocheck
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";
import DefaultItemSlider from "@/app/(components)/common/Slider/DefaultItemSlider";
import Tab from "@/app/(components)/common/Tab";

import "./pointList.scss";

const mobileDataCalculator = (data) => {
  const dataCopy = data.map((item) => item);

  const length = data.length;
  const divide = Math.floor(length / 6) + (Math.floor(length % 6) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    newArray.push(dataCopy.splice(0, 6));
  }

  return newArray;
};

const PointList = ({
  categCd,
  data,
  navData,
  withNav,
}: {
  categCd: string;
  data: unknown;
  navData?: unknown;
  withNav?: boolean;
}) => {
  const [curData, setCurData] = useState(data);
  const [curTab, setCurTab] = useState("");
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const mobileData = mobileDataCalculator(data);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);
  useEffect(() => {
    if (isDesktop) {
      setCurData(curData);
    } else {
      setCurData(mobileData);
    }
  }, [isDesktop]);

  const onClickNavItem = useCallback((navId) => {
    if (navId === "") {
      setCurData(data);
    } else {
      setCurData(data.filter((item) => item.categCd === navId));
    }
    setCurTab(navId);
  }, []);

  return (
    mounted && (
      <section className="point-shop-section">
        <header className="point-shop-section-header">
          <h3>
            {categCd === "PS_CONV"
              ? "편의점"
              : categCd === "PS_PRODUCT"
              ? "상품권/쿠폰"
              : "Food"}
          </h3>
          <Link href={"/"}>전체보기</Link>
        </header>

        {!!withNav ? (
          <Tab
            navData={navData}
            curTab={curTab}
            onClickNavItem={onClickNavItem}
          />
        ) : null}

        {isDesktop ? (
          <div className="point_shop-item_list">
            {curData.map((item) => {
              return (
                <div key={item.brandId} className="item">
                  <Link href={"/"}>
                    <div className="img">
                      <ImageWithFallback
                        src={item.imgLink}
                        objectFit="contain"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <p>{item.brandName}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <DefaultItemSlider
            callPage={"pointShopList"}
            title={"상품리스트"}
            itemList={mobileData}
          />
        )}
      </section>
    )
  );
};

export default PointList;
