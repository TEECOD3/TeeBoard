import { ChevronRight } from "lucide-react";
import React, { ReactNode } from "react";

type TchevronCardProps = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
};

const ChevronCard = (props: TchevronCardProps) => {
  const { icon, subtitle, title } = props;
  return (
    <div className=" p-5 border-cyan-blue rounded-lg w-full border flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        {icon ? (
          <div className="rounded-full size-10 shadow-lg flex items-center justify-center border border-cyan-blue ">
            {icon}
          </div>
        ) : null}
        <div className="gap-y-2 flex flex-col">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-[#adadad] text-Ts2">{subtitle}</p>
        </div>
      </div>
      <ChevronRight color="#3855B3" className="size-4" />
    </div>
  );
};

export default ChevronCard;
