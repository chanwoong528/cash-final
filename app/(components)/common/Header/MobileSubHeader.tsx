"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import "./mobileSubHeader.scss";

const MobileSubHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  let title = "";
  switch (pathname) {
    case "/termsOfUse":
      title = "이용약관";
      break;
    case "/privacy":
      title = "개인정보처리방침";
      break;
    case "/customer":
      title = "공지사항";
      break;
    case "/customer/faq?gubun=S":
      title = "FAQ";
      break;
    default:
      title = "고객센터";
      break;
  }

  return (
    <header className="mobileSubHeader">
      <button onClick={router.back}>BackBtn</button>
      <h2>{title}</h2>
    </header>
  );
};

export default MobileSubHeader;
