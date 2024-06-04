import React from "react";
import UserProfile from "./Components/UserProfile";
import FirstRow from "./Components/FirstRow";
import Secondrow from "./Components/Secondrow";
import ThirdRow from "./Components/ThirdRow";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="h-dvh px-8 py-20 mb-16">
      <h2 className="text-[22.95px] font-semibold mb-10 ">
        Progress Dashboard
      </h2>

      <div className="flex lg:gap-x-16">
        <div className="w-full lg:w-[65%] flex flex-col gap-y-8">
          <FirstRow />
          <Secondrow />
          <ThirdRow />
        </div>
        <div className="flex-1 hidden lg:block">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
