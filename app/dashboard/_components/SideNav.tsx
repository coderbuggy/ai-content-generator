"use client";
import { Gem, History, Home, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    // {
    //   name: "History",
    //   icon: History,
    //   path: "/dashboard/history",
    // },
    {
      name: "Billing",
      icon: Gem,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="relative h-screen p-5 shadow-md rounded-sm border bg-white">
      {/* <div className="flex justify-center">
        {" "}
        <Image src={"/logo.svg"} width={100} height={100} alt="logo"></Image>
      </div> */}
      {/* <hr className="my-6 border" /> */}
      <div className="mt-">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3
              hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
              ${path === menu.path && "bg-primary text-white"}`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
