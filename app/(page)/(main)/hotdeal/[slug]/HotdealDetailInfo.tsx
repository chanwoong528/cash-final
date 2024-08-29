//@ts-nocheck
'use client'
import React, { useState } from "react";

import "./hotdealDetailInfo.scss";

const HotdealDetailInfo = (props) => {
  const { detailInfo } = props;
  const [showPrdInfomation, setShowPrdInfomation] = useState(false); // product moreInfomation

  return (
    <article className="prd-detail">
      <h3>상세정보</h3>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: detailInfo,
          }}
          className={"prd-img" + (showPrdInfomation ? '' : ' hidden')}
        ></div>
        {!(showPrdInfomation) && (
          <div className="btn_wrap">
            <button
              type="button"
              onClick={() => setShowPrdInfomation(true)}
            >
              상품 상세 보기
            </button>
          </div>
        )}
      </div>
    </article>
  )
}

export default HotdealDetailInfo


