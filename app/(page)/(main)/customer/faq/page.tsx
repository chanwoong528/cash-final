//@ts-nocheck
import React from "react";
import Link from "next/link";

import { customerApi } from "@/app/api/(services)/apiCustomer";
import { FAQ_LIST_TYPE } from "@/app/(utils)/CONSTANT/CATEGORY";

import PaginationDefault from "@/app/(components)/common/Pagination/PaginationDefault";
import FaqList from "@/app/(components)/DataList/list/FaqList";

import "./pageFaq.scss"

async function getData(prop) {
  const faqsData = await customerApi.getFaqs(prop);

  return faqsData;
}

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);
  return (
    <section className="main-customer-section faq">
      <h3>FAQ</h3>
      <article className="faq-nav">
        <div>
          {
            FAQ_LIST_TYPE.map((item) => {
              return (
                <Link key={item.gubun} href={`/customer/faq?gubun=${item.gubun}`} className={`${item.gubun === searchParams.gubun ? "on" : ""}`}>{item.title}</Link>
              )
            })
          }
        </div>
      </article>
      <FaqList
        itemList={data.faqList.content} />

      <PaginationDefault
        paginationData={data.faqList.pageable}
        totalPages={data.faqList.totalPages}
      />
    </section>
  )
}

export default page;
