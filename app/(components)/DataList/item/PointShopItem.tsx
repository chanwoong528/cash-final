//@ts-nocheck
import React from "react";
import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";

import "./pointShopItem.scss";

const PointShopItem = ({ itemData, psType }) => {
  // { categCd: 'popul', title: '인기브랜드' },
  // { categCd: 'PS_CONV', title: '편의점' },
  // { categCd: 'PS_FOOD', title: 'Food' },
  // { categCd: 'PS_PRODUCT', title: '상품권/쿠폰' }

  return (
    <li className={`card-item ps-item ${psType}`} key={itemData.brandId}>
      <a href={""}>
        <div className="image-box">
          <ImageWithFallback
            src={
              itemData.image.includes("https://")
                ? itemData.image
                : `https://${itemData.image}`
            }
            width={120}
            height={!!psType ? 60 : 120}
            alt={itemData.brandName}
          />
        </div>
        <h3>{itemData.brandName}</h3>
      </a>
    </li>
  );
};

export default PointShopItem;
