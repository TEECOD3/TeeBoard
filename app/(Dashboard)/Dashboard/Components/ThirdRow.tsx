import CreatePen from "@/components/custom-icons/CreatePen";
import Support from "@/components/custom-icons/Support";
import { ChevronRight } from "lucide-react";
import React from "react";
import ChevronCard from "./ChevronCard";

type Props = {};

const ThirdRow = (props: Props) => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between gap-x-5">
      <ChevronCard
        icon={<CreatePen />}
        title="Grammer"
        subtitle="+30 grammer rules"
      />

      <ChevronCard
        icon={<Support />}
        title="Dictionary"
        subtitle="+10 New Words"
      />
    </section>
  );
};

export default ThirdRow;
