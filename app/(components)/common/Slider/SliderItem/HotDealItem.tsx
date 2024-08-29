//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";
import "./hotdealItem.scss";

const HotDealItem = ({ item }) => {
  console.log(item);
  return (
    <Link href={`/hotdeal/${item.productNum}`}>
      <div className="hotdeal-slider-card">
        <ImageWithFallback
          src={item.imgLink}
          width={207}
          height={110}
          objectFit="contain"
          alt={item.name}
        />
        <p className="hotdeal-title">{item.name}</p>
        <div className="info-box">
          {item.sale !== 0 && (
            <var className="percent">{item.sale}%</var>
          )}
          <div className="price-box">
            {item.originPrice !== 0 && (
              <var className="op">
                {item.originPrice}<abbr>원</abbr>
              </var>
            )}
            <var className="cp">
              {item.salePrice}<abbr>원</abbr>
            </var>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotDealItem;
