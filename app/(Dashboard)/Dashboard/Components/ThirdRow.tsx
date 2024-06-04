import CreatePen from "@/components/custom-icons/CreatePen";
import Support from "@/components/custom-icons/Support";
import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {};

const ThirdRow = (props: Props) => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between gap-x-5">
      <div className=" p-5 border-cyan-blue rounded-lg w-full border flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full size-10 shadow-lg flex items-center justify-center border border-cyan-blue ">
            <CreatePen />
          </div>
          <div className="gap-y-2 flex flex-col">
            <p className="text-sm font-semibold">Grammer</p>
            <p className="text-[#adadad] text-Ts2">+30 grammer rules</p>
          </div>
        </div>
        <ChevronRight color="#3855B3" className="size-4" />
      </div>
      <div className=" p-5 border-cyan-blue rounded-lg w-full border flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full size-10 shadow-lg flex items-center justify-center border border-cyan-blue ">
            <Support />
          </div>
          <div className="gap-y-2 flex flex-col">
            <p className="text-sm font-semibold">Dictionary</p>
            <p className="text-[#adadad] text-Ts2">+10 New words</p>
          </div>
        </div>
        <ChevronRight color="#3855B3" className="size-4" />
      </div>
    </section>
  );
};

export default ThirdRow;
