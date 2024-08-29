import React from "react";
import MobileSubHeader from "@/app/(components)/common/Header/MobileSubHeader";
import ServiceSideNav from "@/app/(components)/common/Nav/ServiceSideNav";
import ServiceTab from "./ServiceTab";

import "./layoutService.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-service">
      <MobileSubHeader />
      <ServiceSideNav />
      <ServiceTab />
      <div className="serviceCon">
        {children}
      </div>
    </main>
  );
}
