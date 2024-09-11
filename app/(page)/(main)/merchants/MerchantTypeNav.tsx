//@ts-nocheck
'use client'
import React from 'react'

import "./merchantTypeNav.scss"

const MerchantTypeNav = ({ navList, curFilter, onClickFilter }) => {
  return (
    <nav className='category-nav'>
      <p>카테고리</p>
      <ul>
        {navList?.map((item, idx) => {
          return <li key={item.title}>
            <button
              className={curFilter === item.categCd ? "on" : ""}
              onClick={() => onClickFilter(item.categCd)}
            >
              {item.title}
            </button>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default MerchantTypeNav