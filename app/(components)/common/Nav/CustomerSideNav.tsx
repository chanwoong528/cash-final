"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomerSideNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ol className="breadcrumbs">
        <li>
          <p>홈</p>
        </li>
        <li>
          <p>고객센터</p>
        </li>
        <li>
          <p>{pathname === "/customer" ? "공지사항" : "FAQ"}</p>
        </li>
      </ol>
      <h2>고객센터</h2>
      <ul>
        <li className={`${pathname === "/customer" ? "on" : ""}`}>
          <Link href={"/customer"}>공지사항</Link>
        </li>
        <li className={`${pathname === "/customer/faq" ? "on" : ""}`}>
          <Link href={"/customer/faq?gubun=S"}>FAQ</Link>
        </li>
        <li>
          <Link href="https://pf.kakao.com/_uJADxb" target="_blank">카카오톡 문의</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomerSideNav;
