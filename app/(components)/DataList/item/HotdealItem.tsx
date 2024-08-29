//@ts-nocheck
"use client";

import React from 'react'
import Link from 'next/link'
import ImageWithFallback from '@/app/(components)/common/ImageWithFallback';

import "./hotdealItem.scss";

const HotdealItem = ({ itemData }) => {

  const formatImage = (imgSrc) => {

    if (imgSrc.includes('https://')) return imgSrc.split('https://')[1]


    return imgSrc
  }

  return (
    <li
      key={itemData?.productName}
      className="hotdeal-item"
    >
      <Link href={`/hotdeal/${itemData.productNum}`}>
        <div className="image-box">
          <ImageWithFallback
            src={!!itemData.image ? formatImage(itemData.image) : itemData.imgLink}
            width={260}
            height={260}
            objectFit="contain"
            alt={!!itemData.title ? itemData.title : itemData.name}
          />
        </div>
        <h3>{itemData.name}</h3>
        <div className="info-box">
          <var className="percent">{`${itemData.sale}`}%</var>
          <div className="price-box">
            <var className="op">
              {`${Number(
                !!itemData.listPrice ? itemData.listPrice : itemData.originPrice
              ).toLocaleString()}`}
              <abbr>원</abbr>
            </var>
            <var className="cp">
              {`${Number(
                !!itemData.price ? itemData.price : itemData.salePrice
              ).toLocaleString()}`}
              <abbr>원</abbr>
            </var>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default HotdealItem