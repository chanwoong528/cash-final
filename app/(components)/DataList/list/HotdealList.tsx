//@ts-nocheck
import React from 'react'
import HotdealItem from '../item/HotdealItem'

import "./hotdealList.scss";

const HotdealList = ({ hotdealList }) => {
  return (
    <ul className='hotdeal-list'>
      {hotdealList.map((item, idx) => (
        <HotdealItem key={item.productNum ?? idx} itemData={item} />
      ))}
    </ul>
  )
}

export default HotdealList