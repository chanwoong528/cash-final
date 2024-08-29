//@ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./footer.scss";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="main-footer">
      <nav>
        <ul>
          <li>
            <Link href={"/about"} className={`${pathname === "/about" ? "on" : ""}`} passHref>
              캐시나무 소개
            </Link>
          </li>
          <li>
            <Link href={"/customer/faq?gubun=S"} className={`${pathname === "/customer/faq" ? "on" : ""}`} passHref>
              FAQ
            </Link>
          </li>
          <li>
            <Link href={"/customer"} className={`${pathname === "/customer" ? "on" : ""}`} passHref>
              공지사항
            </Link>
          </li>
          <li className="isNotMobile">
            <Link href={"/privacy"} className={`${pathname === "/privacy" ? "on" : ""}`} passHref>
              개인정보처리방침
            </Link>
          </li>
          <li className="isNotMobile">
            <Link href={"/termsOfUse"} className={`${pathname === "/termsOfUse" ? "on" : ""}`} passHref>
              이용약관
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sub-footer">
        <section className="cs-info">
          <header className="isNotMobile">
            <h4>고객센터</h4>
          </header>
          <Link href="https://pf.kakao.com/_uJADxb" target="_blank">
            카카오톡 문의
          </Link>
          <p>월~금 9:00 ~ 18:00 (주말, 공휴일 휴무)</p>
        </section>
        <section className="comp-info">

          <ul className="isMobile">
            <li>
              <Link href={"/privacy"} passHref>
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link href={"/termsOfUse"} passHref>
                이용약관
              </Link>
            </li>
          </ul>
          <header>
            <h4>캐시나무 대표 이승록</h4>
          </header>

          <address>
            <div>
              <p>사업자등록번호 306-21-61424</p>
              <p>cashnamu@cashnamu.com</p>
            </div>
            <p>
              부산광역시 기장군 정관읍 모전1길 9, 311동 603호
              (정관동일스위트3차)
            </p>
          </address>
          <small>Copyright © CashNamu.co,Ltd. All Rights Reserved.</small>
        </section>

        <section className="appLink">
          <ul>
            <li>
              안드로이드스토어
            </li>
            <li>
              앱스토어
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
