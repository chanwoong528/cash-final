//@ts-nocheck
import React from 'react'
import Link from 'next/link'

import ImageWithFallback from '@/app/(components)/common/ImageWithFallback'

import "./merchantItem.scss"
/*
* Type 
* 1. main item
* 2. slider item
* 3. merchant page item
*/


const MerchantItem = ({ itemData, type }) => {

  if (type === "detailPage") {
    return (<div className='shopping-mall-item'>
      <button className='mall-like-btn'>like brand</button>
      <Link href={"/merchants/" + itemData.merchantId + (window?.location.search ?? "")}>
        <ImageWithFallback
          src={itemData.imageLink}
          width={120}
          height={60}
          alt={itemData.siteName}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <p className='mall-title'>
          {itemData.siteName}
        </p>
        <p className='mall-commission'>
          최대 {itemData.commissionComment}
        </p>
      </Link>
    </div>)

  }



  return (
    <li className="card-item shopping-item" key={itemData.merchantId}>
      <a href="">
        <div className="image-box">
          <ImageWithFallback
            src={itemData.imageLink}
            width={120}
            height={60}
            alt={itemData.siteName}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h3>{itemData.siteName}</h3>
        <p>최대 {itemData.commission} 캐시백</p>
      </a>
    </li>
  )
}

export default MerchantItem