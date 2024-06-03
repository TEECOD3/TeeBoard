import React from "react";
import Logoicon from "../custom-icons/LogoIcon";
import { Separator } from "./separator";
import UnfoldMore from "../custom-icons/UnfoldMore";
import { Siteconfig } from "@/Config/site";
import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-[#183087] p-8 z-50 hidden lg:block  lg:relative styled-scrollbar top-0 left-0 border-pale overflow-auto h-full w-full">
      <div className="capitalize flex gap-x-2 items-center">
        <Logoicon className="size-10" />
        <h1 className="text-3xl font-medium text-white">dlex</h1>
      </div>

      <Separator className="mt-8  bg-[#E6E7E9]/30" />

      <div className="w-full bg-purple rounded-lg  p-3 flex gap-x-2 items-center my-6">
        <div className="rounded-full bg-yellow-400 uppercase font-medium text-sm flex items-center justify-center size-8 ">
          <span>dw</span>
        </div>
        <div className="flex flex-col ">
          <p className="text-white text-sm">Dlex Design</p>
          <p className="text-[#E6E7E9]/50 text-[10px]">general team</p>
        </div>
        <div className="flex-1 items-center flex justify-center cursor-pointer">
          <UnfoldMore />
        </div>
      </div>

      <div className="flex gap-y-4 flex-col my-8">
        {Siteconfig.siteDashboardRoutes.dashboardRoutes
          .slice(0, 4)
          .map((route, index) => {
            return (
              <Link href={route.path} key={route.label}>
                <div className="flex items-center justify-center gap-x-1 text-[#E6E7E9]/50 hover:text-white">
                  <div className="">
                    <div className="flex items-center justify-start size-8 ">
                      {route.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-Ts4  transition-all duration-300 ease-out transform  font-medium capitalize">
                    {route.label}
                  </div>

                  {route.label === "chat" ? (
                    <div className="flex  items-center justify-center rounded-full size-5 text-white text-[12px] bg-yellow-500">
                      <span>5</span>
                    </div>
                  ) : null}
                </div>
              </Link>
            );
          })}
      </div>

      <div className="">
        <h2 className="uppercase text-[#E6E7E9]/50 text-Ts3 ">shortcut</h2>
      </div>

      <div className="flex gap-y-4 flex-col my-4 ">
        {Siteconfig.siteDashboardRoutes.dashboardRoutes
          .slice(4, 7)
          .map((route, index) => {
            return (
              <Link href={route.path} key={route.label}>
                <div className="flex items-center justify-center gap-x-1 text-[#E6E7E9]/50 hover:text-white">
                  <div className="hover:invert-0">
                    <div className="flex items-center justify-start size-8">
                      {route.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-Ts4  transition-all duration-300 ease-out transform font-medium capitalize">
                    {route.label}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <div className="  absolute bottom-0 flex flex-col w-full left-0 px-8 py-6 mt-20  ">
        <div className="bg-purple w-full p-4 rounded-lg text-Ts4 capitalize">
          <div className="flex justify-between   text-white font-medium">
            <span>storage</span>
            <span>upgrade</span>
          </div>
          <div className="w-full mt-2">
            <span className="text-white mr-1">3.4gb</span>
            <span className="text-[#E6E7E9]/50">of 15gb</span>
          </div>

          <div className="w-full h-[3px] rounded-lg relative bg-[#E6E7E9]/30 mt-2 -z-1">
            <div className="absolute w-[25%] top-0 left-0 bg-white z-20 h-full"></div>
          </div>
        </div>

        <Separator className="my-4  bg-[#E6E7E9]/30" />

        <div className="flex justify-between items-center ">
          <div className="flex gap-x-2 items-center">
            <div className="rounded-full bg-yellow-400 size-8"></div>
            <span className="text-sm capitalize text-white">jane smith</span>
          </div>
          <UnfoldMore className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
