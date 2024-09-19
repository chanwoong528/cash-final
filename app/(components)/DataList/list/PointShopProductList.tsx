//@ts-nocheck
import React from "react";
import PaginationDefault from "@/app/(components)/common/Pagination/PaginationDefault";
import PointProductItem from "@/app/(components)/DataList/item/PointProductItem";

import "./pointShopProductList.scss";

const paginationData = {
  pageNumber: 0,
  pageSize: 10,
  paged: 0,
  unpaged: 1,
};

const PointShopProductList = ({ listData }) => {
  return (
    <div className="ps-detail-product-table">
      <ul className="ps-list">
        {listData.contentList.map((item, idx) => (
          <PointProductItem
            key={item.brandId + idx}
            itemData={item}
            psType={"ps-detail-item"}
          />
        ))}
      </ul>
      <PaginationDefault paginationData={paginationData} totalPages={1} />
    </div>
  );
};

export default PointShopProductList;
