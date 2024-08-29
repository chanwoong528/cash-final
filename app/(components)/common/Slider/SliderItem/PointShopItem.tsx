//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";

const PointShopItem = ({ item }) => {
  return (
    <div className="point_shop-item_list">
      {
        item.map((el) => {
          return (
            <Link href={"/"} key={el.brandId} className="item">
              <div className="img">
                <div className="img_box">
                  <ImageWithFallback
                    src={el.imgLink}
                    objectFit="contain"
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              </div>
              <p>{el.brandName}</p>
            </Link>
          )
        })
      }
    </div>
  );
};

export default PointShopItem;
