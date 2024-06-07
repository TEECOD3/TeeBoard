import Check from "@/components/custom-icons/Check";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import userprofileimage from "@/public/images/10002.jpg";

type Props = {};

const FirstRow = (props: Props) => {
  return (
    <section className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
      <div className="w-full lg:w-1/2 ">
        <ExamDetails />
      </div>

      <div className="w-full flex-1 flex flex-row gap-x-5">
        <div className="w-full lg:w-1/2">
          <ActivitiesDetails
            title="Homework"
            subtitle="for today's lesson"
            time="35 MIN AGO"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <ActivitiesDetails
            title="Reading"
            subtitle="24 Words per week"
            time="25 MIN AGO"
            color="#E1F5FD"
            iconColor="#4A4DE6"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstRow;

function ExamDetails() {
  return (
    <div className="rounded-lg bg-dark-blue text-white p-5">
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-2">
          <span className="uppercase font-medium text-Ts2 text-[#D9D9D9]">
            Deadline
          </span>{" "}
          <span className="text-Ts2">12:00</span>
        </div>

        <p className="text-[22.95px]">Exam - Unit 5</p>

        <p className="font-medium text-Ts2 text-[#D9D9D9] capitalize">
          spanish Language
        </p>

        <div className="flex items-center">
          <div className="relative size-8 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src={userprofileimage}
              alt="user profile image"
              height={100}
              width={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative size-9 rounded-full overflow-hidden -ml-4  border-[3px] border-dark-blue flex items-center justify-center">
            <Image
              src={userprofileimage}
              alt="user profile image"
              height={150}
              width={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative size-10 rounded-full overflow-hidden -ml-4 border-[3px] border-dark-blue flex items-center justify-center">
            <Image
              src={userprofileimage}
              alt="user profile image"
              height={150}
              width={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative size-10 rounded-full overflow-hidden -ml-4 border-[3px] border-dark-blue  text-dark-blue flex items-center justify-center bg-gray-200">
            <span className="text-[12px]">99+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type TActivitiesDetails = {
  title: string;
  subtitle: string;
  time: string;
  color?: string;
  iconColor?: string;
};

function ActivitiesDetails({
  title,
  subtitle,
  time,
  color,
  iconColor,
}: TActivitiesDetails) {
  return (
    <div
      className={cn(`p-5  bg-[#F5F5F5] gap-y-2 rounded-lg`, {
        "bg-[#E1F5FD]": color,
      })}
    >
      <div className="flex flex-col gap-y-1">
        <Check color={iconColor ? iconColor : "orange"} />
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-[#adadad] text-Ts2">{subtitle}</p>
      </div>

      <p className="text-Ts2 font-semibold capitalize mt-12">{time}</p>
    </div>
  );
}
