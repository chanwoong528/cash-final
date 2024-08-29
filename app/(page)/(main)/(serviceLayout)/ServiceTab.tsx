"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./serviceTab.scss";

const ServiceTab = () => {
  const pathname = usePathname();
  return (
    <article className="serviceTab">
      <Link className={`tabBtn ${pathname === "/termsOfUse" ? "on" : ""}`} href={'/termsOfUse'}>이용약관</Link>
      <Link className={`tabBtn ${pathname === "/privacy" ? "on" : ""}`} href={'/privacy'}>개인정보처리방침</Link>
    </article>
  );
};

export default ServiceTab;
