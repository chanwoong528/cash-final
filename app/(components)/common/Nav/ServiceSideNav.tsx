"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ServiceSideNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ol className="breadcrumbs">
        <li>
          <p>홈</p>
        </li>
        <li>
          <p>공지사항</p>
        </li>
        <li>
          <p>
            {pathname === "/termsOfUse" && "이용약관"}
            {pathname === "/privacy" && "개인정보처리방침"}
          </p>
        </li>
      </ol>
    </nav>
  );
};

export default ServiceSideNav;
