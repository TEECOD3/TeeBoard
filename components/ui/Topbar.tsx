import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ukimage from "@/public/assets/svg/UkFlag.svg";
import userprofileimage from "@/public/images/10002.jpg";
import Image from "next/image";
import Menu from "../custom-icons/Menu";
import Search from "../custom-icons/Search";
import Sidebar from "./sidebar";
import UnfoldMore from "../custom-icons/UnfoldMore";
import { Separator } from "./separator";
import Link from "next/link";
import { Siteconfig } from "@/Config/site";
import Logoicon from "../custom-icons/LogoIcon";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 lg:hidden flex justify-between py-4 container h-[4rem]">
      <div className="flex gap-x-3 items-center ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-0">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-0">
            <div className="bg-[#183087] p-8 z-50  lg:relative styled-scrollbar top-0 left-0 overflow-auto h-dvh w-full">
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
                <h2 className="uppercase text-[#E6E7E9]/50 text-Ts3 ">
                  shortcut
                </h2>
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

              <div className=" flex flex-col w-full left-0  mt-20  ">
                <div className="bg-purple w-full p-4 rounded-lg text-Ts4 capitalize">
                  <div className="flex justify-between   text-white font-medium">
                    <span>storage</span>
                    <span>upgrade</span>
                  </div>
                  <div className="w-full mt-2">
                    <span className="text-white mr-1">3.4gb</span>
                    <span className="text-[#E6E7E9]/50">of 15gb</span>
                  </div>

                  <div className="w-full h-[3px] rounded-lg relative bg-[#E6E7E9]/30 overflow-hidden mt-2 -z-1">
                    <div className="absolute w-[25%] top-0 left-0 bg-white z-20 h-full"></div>
                  </div>
                </div>

                <Separator className="my-4  bg-[#E6E7E9]/30" />

                <div className="flex justify-between items-center ">
                  <div className="flex gap-x-2 items-center">
                    <div className="rounded-full bg-yellow-400 size-8"></div>
                    <span className="text-sm capitalize text-white">
                      jane smith
                    </span>
                  </div>
                  <UnfoldMore className="cursor-pointer" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Search />
      </div>
      <div className="flex gap-x-3 items-center  justify-center ">
        <div className="relative overflow-hidden  w-8 h-full  flex items-center justify-center">
          <Image
            src={ukimage}
            alt="user profile image"
            height={150}
            width={150}
          />
        </div>
        <div className="relative  rounded-full overflow-hidden size-8">
          <Image
            src={userprofileimage}
            alt="user profile image"
            height={150}
            width={150}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
