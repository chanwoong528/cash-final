
//@ts-nocheck
import React from "react";
import Link from "next/link";

import { customerApi } from "@/app/api/(services)/apiCustomer";

import "./pageNoticeDetail.scss"


async function getData(idx) {
  const noticeData = await customerApi.getNotice({ idx: idx });
  return noticeData;
}

const page = async ({ params }: { params: { idx: string } }) => {

  const pageNumber = Number(params.slug);
  const data = await getData(pageNumber);

  const dataList = data.noticeList.content;
  // const dataList = testData;
  const currentNumber = dataList.findIndex((el) => el.idx === pageNumber);

  const nextIdx = dataList.length > currentNumber + 1 ? currentNumber + 1 : undefined;
  const nextData = nextIdx !== undefined ? dataList[nextIdx] : { title: '다음 글이 없습니다.', view: null }

  const prevIdx = currentNumber > 0 ? currentNumber - 1 : undefined;
  const prevData = prevIdx !== undefined ? dataList[prevIdx] : { title: '이전 글이 없습니다.', view: null }
  // pageNumber === 0;
  const currentData = data.noticeDTO;
  return (
    <section className="notice-view">
      <h3>공지사항</h3>
      <header>
        <strong>{currentData.title}</strong>
        <p>{currentData.createDate}</p>
      </header>
      <div
        className="notice-view_content"
        dangerouslySetInnerHTML={{
          __html: currentData.content,
        }} />

      <ul>
        <li>
          <Link href={prevIdx !== undefined ? `/customer/${prevData.idx}` : ''}>
            <b>이전글</b>
            {prevData.title}
          </Link>
        </li>
        <li>
          <Link href={nextIdx !== undefined ? `/customer/${nextData.idx}` : ''}>
            <b>다음글</b>
            {nextData.title}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default page;
