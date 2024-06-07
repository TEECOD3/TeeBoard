import BellOutline from "@/components/custom-icons/BellOutline";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Secondrow = (props: Props) => {
  return (
    <section className="flex flex-col lg:flex-row gap-x-5 max-lg:gap-y-5">
      <div className="p-5 border-cyan-blue rounded-lg w-full border">
        <GroupInfo />
      </div>
      <div className="p-5 border-cyan-blue rounded-lg w-full border">
        <OverallProgress />
      </div>
    </section>
  );
};

export default Secondrow;

function GroupInfo() {
  return (
    <div className="">
      <div className="flex justify-between">
        <p className="font-semibold text-Ts5">Group info</p>
        <BellOutline />
      </div>
      <p className="text-[#adadad] text-Ts2 mt-2">13 students in the group</p>
      <div className="rounded-lg bg-[#FF9365] text-white p-6 mt-4">
        <p className="font-semibold text-Ts5">Group work</p>
        <div className="flex  justify-between ">
          <p className="text-Ts4 mt-3">
            4 students in the group are <br />
            online now
          </p>
          <span>
            <ChevronRight className="size-4" />
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-Ts5">Today&apos;s lesson</p>
        <p className="text-[#adadad] text-Ts3 mt-2">Unit 6 Aricle</p>
      </div>
    </div>
  );
}

function OverallProgress() {
  return (
    <div className="">
      <div className="">
        <p className="font-semibold text-Ts5 capitalize">overall progress</p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <p className="text-[22.95px] leading-8 font-medium">
            Germany for <br />
            Beginners
          </p>

          <div className="rounded-full size-10 shadow-lg flex items-center justify-center border border-cyan-blue ">
            <Image
              src={"/assets/svg/germany.svg"}
              alt="germany image"
              height={20}
              width={20}
            />
          </div>
        </div>

        <div className="">
          <div className="w-full h-[6px] rounded-xl relative bg-[#E6E7E9]/30 my-3 overflow-hidden  -z-1">
            <div className="absolute w-[75%] top-0 left-0 bg-[#3855B3] z-20 h-full "></div>
          </div>
          <p className="font-semibold">75%</p>
        </div>

        <Separator className="my-4  bg-[#E6E7E9]/30" />

        <div className="w-full">
          <div className="flex gap-x-1 justify-end items-center">
            <p className="font-semibold text-Ts4 text-[#3855B3]">
              Explore More
            </p>
            <ChevronRight color="#3855B3" className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
