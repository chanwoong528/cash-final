import React from "react";
import CustomerSideNav from "@/app/(components)/common/Nav/CustomerSideNav";
import MobileSubHeader from "@/app/(components)/common/Header/MobileSubHeader";

import "./layoutCustomer.scss";

export default function Layout({ children }: { children: React.ReactNode }) {



  return (
    <main className="main-customer">
      <MobileSubHeader />
      <CustomerSideNav />
      {children}
    </main>
  );
}
