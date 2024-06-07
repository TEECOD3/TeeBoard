import { SpinnersEclipse } from "@/components/custom-icons/Spinners";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Loading.... <SpinnersEclipse />
    </div>
  );
};

export default Loading;
