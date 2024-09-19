//@ts-nocheck
"use client";
import React from "react";
import PaginationDefault from "@/app/(components)/common/Pagination/PaginationDefault";
import PointShopItem from "@/app/(components)/DataList/item/PointShopItem";

import "./pointShopDetailList.scss";

const PointShopDetailList = ({ listData }) => {
  return (
    <div className="ps-detail-table">
      <ul className="ps-list">
        {listData.contentList.map((item, idx) => (
          <PointShopItem
            key={item.brandId + idx}
            itemData={item}
            psType={"ps-detail-item"}
          />
        ))}
      </ul>
      <PaginationDefault
        paginationData={listData.pageable}
        totalPages={listData.totalPages}
      />
    </div>
  );
};

export default PointShopDetailList;
