//@ts-nocheck
import React from 'react'
import FaqItem from '../item/FaqItem'


const FaqList = ({ itemList }) => {

  return (
    <ul>
      {itemList.map((item, idx) => (<FaqItem key={item.idx} item={item} />))}

    </ul>
  )
}

export default FaqList