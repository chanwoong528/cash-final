//@ts-nocheck
"use client";
import React, { useState } from 'react'
import MerchantTypeNav from './MerchantTypeNav';
import MerchantList from '@/app/(components)/DataList/list/MerchantList';
import PaginationDefault from '@/app/(components)/common/Pagination/PaginationDefault';

const MerchantListWrap = ({ itemList, navList2nd }) => {
  const [curFilter, setCurFilter] = useState("");
  const [curPage, setCurPage] = useState(1)

  const totalPages = itemList
    ?.filter(item => {
      if (curFilter === "") return item
      return Number(item.categCd) === Number(curFilter)
    }).length / 16


  const onClickFilter = (filterCd) => {
    setCurFilter(filterCd);
  }
  return (
    <>
      <MerchantTypeNav navList={navList2nd} curFilter={curFilter} onClickFilter={onClickFilter} />
      <MerchantList curPage={curPage} itemList={itemList} curFilter={curFilter} />
      <PaginationDefault
        paginationData={{
          pageNumber: curPage - 1,
          pageSize: totalPages,
          paged: false,
          unpaged: true
        }}
        totalPages={totalPages}
        type="client"
        setCurPage={setCurPage}
      />
    </>
  )
}

export default MerchantListWrap