//@ts-nocheck
'use client';
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { PATH_NAME } from "@/app/(utils)/CONSTANT/CATEGORY";

import "./innerPageNav.scss";

const InnerPageNav = ({ pageType, navList }) => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickTabBtn = (tableIdx, categCd) => {

    if (pageType === PATH_NAME.POINT && categCd !== '') {
      return router.push(`${pageType}/point_detail?categCd=${categCd}&categCd_lvl2=${categCd === 'PS_FOOD' ? 'CAFE' : categCd === 'PS_CONV' ? 'CONV' : 'COUPON'}&cpage=1`);
    }

    return router.push(`${pageType}?categCd=${!!categCd ? categCd : ""}`);

  };

  const renderActiveClassName = (item, idx) => {
    switch (pageType) {
      default:
        return !searchParams.get("categCd") && idx === 0
          ? " on"
          : searchParams.get("categCd") === item.categCd
            ? " on"
            : "";
    }
  };

  return (
    <nav className="detail-nav">
      <ul>
        {navList?.map((item, idx) => {
          return (
            <li key={item.categCd} className={renderActiveClassName(item, idx)}>
              <button onClick={() => onClickTabBtn(idx + 1, item.categCd)}>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default InnerPageNav