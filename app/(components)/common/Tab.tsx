//@ts-nocheck
import { PRODUCT_TYPE } from '@/app/(utils)/CONSTANT/CATEGORY';
import React from 'react'

import "./tab.scss"

const Tab = ({ productType, navData, onClickNavItem, curTab }) => {
  return (
    <nav
      className={`itemtable-nav${productType === PRODUCT_TYPE.POINT ? " point-nav" : ""
        }`}
    >
      <ul>
        {navData?.map((navItem, idx) => {
          return (
            <li
              key={navItem.categCd + idx}
              className={curTab === navItem.categCd ? "on" : ""}
            >
              <button onClick={() => onClickNavItem(navItem.categCd)}>
                {navItem.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav >
  )
}

export default Tab