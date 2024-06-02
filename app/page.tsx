import BellIcon from "@/components/custom-icons/Bell";
import BellOutline from "@/components/custom-icons/BellOutline";
import Chart from "@/components/custom-icons/Chart";
import CreatePen from "@/components/custom-icons/CreatePen";
import Logoicon from "@/components/custom-icons/LogoIcon";
import Menu from "@/components/custom-icons/Menu";
import Profile from "@/components/custom-icons/Profile";
import Settings from "@/components/custom-icons/Settings";
import Support from "@/components/custom-icons/Support";
import UnfoldMore from "@/components/custom-icons/UnfoldMore";

export default function Home() {
  return (
    <div className="">
      <BellIcon />
      <BellOutline />
      <div className="bg-black">
        <Chart />
        <Menu />
        <Settings />
        <UnfoldMore />
        <Profile />
        <Support />
        <Logoicon />
        <CreatePen />
      </div>
    </div>
  );
}
