//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";

import "./shoppingItem.scss";
// import "../../../../styles/components/bestBrand.scss";

const ShoppingItem = ({ item }) => {

  return (
    <>
      <div className="brand-slider-card shopping-card">
        <Link href={`/shopping/${item.merchantId}${window?.location.search}`}>
          <ImageWithFallback
            src={item.imageLink}
            width={120}
            height={60}
            objectFit="contain"
            alt={item.brandName}
          />
          <p className="brand-title">
            {item.siteName}
          </p>
        </Link>
        <div className="brand-footer">
          <p className="brand-commission">
            {item.commissionComment}
          </p>
          <button className="brand-like-btn">like</button>
        </div>
      </div >
    </>
  );
};

export default ShoppingItem;
