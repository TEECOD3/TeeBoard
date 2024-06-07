import React from "react";
import UserProfile from "./Components/UserProfile";
import FirstRow from "./Components/FirstRow";
import Secondrow from "./Components/Secondrow";
import ThirdRow from "./Components/ThirdRow";
import Topbar from "@/components/ui/Topbar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Topbar />
      <div className="flex lg:gap-x-20">
        <div className="px-8 mt-5 lg:mt-0 lg:py-20 mb-16 w-full lg:w-[62%]">
          <h2 className="text-[22.95px] font-semibold mb-10 ">
            Progress Dashboard
          </h2>

          <div className="flex">
            <div className="w-full  flex flex-col gap-y-8">
              <FirstRow />
              <Secondrow />
              <ThirdRow />
            </div>
          </div>
        </div>

        <div className="flex-1 hidden lg:block">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
