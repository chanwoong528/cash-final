//@ts-nocheck
"use client";
import React from 'react'
import MerchantItem from '../item/MerchantItem';

import "./merchantList.scss"


const MerchantList = ({ curPage, itemList, curFilter }) => {
  return (
    <ul className='main-shopping-list'>
      {itemList
        ?.filter(item => {
          if (curFilter === "") return item
          return Number(item.categCd) === Number(curFilter)
        })
        .slice((curPage - 1) * 16, curPage * 16)
        .map((smItem, idx) => {
          return <MerchantItem key={smItem.merchantId} itemData={smItem} type="detailPage" />
        })
      }
    </ul>
  )
}

export default MerchantList