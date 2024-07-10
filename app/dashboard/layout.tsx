"use client";
import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider
        value={{ updateCreditUsage, setUpdateCreditUsage }}
      >
        <div className="bg-slate-100 h-screen">
          <div className="md:w-64 hidden md:block fixed">
            <SideNav />
          </div>
          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
