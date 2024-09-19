import React from "react";
import ImageWithFallback from "@/app/(components)/common/ImageWithFallback";
import Link from "next/link";

const PointProductItem = ({
  itemData,
}: {
  itemData: {
    goodsId: string;
    goodsName: string;
    brandId: string;
    brandName: string;
    price: number;
    sprice: number;
    imgLink: string;
  };
}) => {
  const itemInfo = {
    goodsId: itemData.goodsId,
    goodsName: itemData.goodsName,
    brandId: itemData.brandId,
    title: itemData.brandName,
    imageLink: itemData.imgLink,
    price: itemData.price,
    sprice: itemData.sprice,
  };
  return (
    <li>
      <Link href={""}>
        <div className="img">
          <ImageWithFallback
            src={itemInfo.imageLink}
            alt={itemInfo.title}
            width={280}
            height={280}
            objectFit="contain"
          />
        </div>
        <p>{itemInfo.title}</p>
        <p>{itemInfo.goodsName}</p>
        <div className="point-price">
          <div></div>
          <h3>
            {String(itemInfo.sprice)}
            <span>원</span>
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default PointProductItem;
