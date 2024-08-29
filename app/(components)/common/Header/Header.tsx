"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import "./header.scss"


const Header = () => {

  // const session = useSession();
  const pathname = usePathname();
  const [showCS, setShowCS] = useState(false); //고객센터
  const [searchTerm, setSearchTerm] = useState("");



  return (
    <>
      <nav className="main-nav">
        <div className="left-nav">
          <h1>
            <Link href={"/"}>
              <Image
                src="/asset/icons/main_logo.png"
                alt="캐시나무 로고"
                width={230}
                height={45}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
          </h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="검색하기"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            />
            <button className="search-btn">
              <Image
                src="/asset/icons/icon_search.png"
                width={26}
                height={26}
                alt="검색"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </button>
          </div>
        </div>
        <ul className="right-nav-list">
          <li>
            {
              // session.data?.user?.email
              //   ? <Link href="/">{session.data?.user?.email}</Link> :
              <Link href={"/login"}>로그인</Link>
            }
          </li>
          <li>
            <button
              onClick={() => {
                setShowCS(!showCS);
              }}
            >
              고객센터
            </button>
            {showCS && (
              <ul className="cs-list">
                <li>
                  <Link
                    onClick={() => {
                      setShowCS(false);
                    }}
                    href={"/customer"}
                  >
                    공지사항
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShowCS(false);
                  }}
                >
                  <Link href={"/customer/faq?gubun=S"}>FAQ</Link>
                </li>
                <li
                  onClick={() => {
                    setShowCS(false);
                  }}
                >
                  <Link href="https://pf.kakao.com/_uJADxb" target="_blank">카카오톡 문의</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <nav className="nav-cate">
        <div className="nav-con">
          <ul className="cate-list">
            <li className={pathname.includes("/merchants") ? "selected" : ""}>
              <Link href={"/merchants"}>쇼핑몰</Link>
            </li>
            <li className={pathname.includes("/hotdeal") ? "selected" : ""}>
              <Link href={"/hotdeal"}>핫딜상품</Link>
            </li>
            <li className={pathname.includes("/points") ? "selected" : ""}>
              <Link href={"/points"}>포인트샵</Link>
            </li>
          </ul>
          <button className="cashback-btn">캐시백 받는 방법</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
