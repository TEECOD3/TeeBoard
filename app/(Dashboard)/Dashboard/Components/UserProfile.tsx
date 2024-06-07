import CreatePenWhite from "@/components/custom-icons/CreatePenwhite";
import userprofileimage from "@/public/images/10002.jpg";
import {
  AlbumIcon,
  NotepadTextDashed
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import ChevronCard from "./ChevronCard";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <aside className="px-7 py-20 flex flex-col gap-y-6 items-center bg-[#F5F5F5] min-h-screen h-full rounded-sm my-2">
      <div className="flex flex-col items-center justify-center gap-y-2 w-full">
        <div className="relative size-12">
          <div className="relative h-full rounded-full overflow-hidden">
            <Image
              src={userprofileimage}
              alt="user profile image"
              height={150}
              width={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-1 right-0 bg-dark-blue text-white size-3 flex items-center justify-center rounded-full text-[10px] p-2 z-3 border-white border-2">
            <span>5</span>
          </div>
        </div>
        <p className="text-[19.3px] font-semibold capitalize">
          harrison philips
        </p>

        <p className="text-[#adadad] text-Ts2">Business analyst</p>
      </div>
      <div className="w-full">
        <ChevronCard
          title="Get - 10% sell price"
          subtitle="for 'spanish A2' course"
        />
      </div>
      <div className="w-full">
        <p className="text-[19.3px] font-semibold capitalize">
          course progress
        </p>

        <div className="flex mt-5 gap-y-5 flex-col">
          <div className="p-5 border-cyan-blue rounded-lg w-full border ">
            <div className="flex justify-between items-center w-[70%] gap-x-3">
              <p className="font-semibold text-Ts5 text-[#4A4DE6]">63%</p>
              <div className="rounded-lg p-2  flex items-center justify-center bg-[#4A4DE6]">
                <CreatePenWhite />
              </div>
              <div className="w-[50%]">
                <div className="gap-y-1 flex flex-col">
                  <p className="text-sm font-semibold capitalize">grammer</p>
                  <p className="text-[#adadad] text-[10px] capitalize ">
                    learn new rules
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 border-cyan-blue rounded-lg w-full border ">
            <div className="flex justify-between items-center w-[70%] gap-x-3">
              <p className="font-semibold text-Ts5 text-[#FFA000]">63%</p>
              <div className="rounded-lg p-2  flex items-center justify-center bg-[#FFA000]">
                <NotepadTextDashed color="#fff" className="size-6" />
              </div>
              <div className="w-[50%]">
                <div className="gap-y-1 flex flex-col">
                  <p className="text-sm font-semibold capitalize">Dictionary</p>
                  <p className="text-[#adadad] text-[10px] capitalize ">
                    learn 4 new words
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 border-cyan-blue rounded-lg w-full border ">
            <div className="flex justify-between items-center w-[70%] gap-x-3">
              <p className="font-semibold text-Ts5 text-[#EA4C89]">63%</p>
              <div className="rounded-lg p-2  flex items-center justify-center bg-[#EA4C89]">
                <AlbumIcon color="#fff" className="size-6" />
              </div>
              <div className="w-[50%]">
                <div className="gap-y-1 flex flex-col">
                  <p className="text-sm font-semibold capitalize">reading</p>
                  <p className="text-[#adadad] text-[10px] capitalize ">
                    learn new rules
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

type TprogressBarProps = {
  progress: number;
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconBg: string;
};

export default UserProfile;
