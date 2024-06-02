import type { SVGProps } from "react";
import React from "react";

export default function Chat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M9.90264 2.31529C5.24065 2.31529 1.86252 6.1187 1.86252 10.3394C1.86252 11.6874 2.2557 13.0756 2.94577 14.3434C3.07415 14.552 3.0902 14.8168 3.00194 15.0655L2.46432 16.8629C2.34396 17.2962 2.71307 17.6172 3.1223 17.4888L4.74316 17.0074C5.18448 16.8629 5.52952 17.0475 5.93955 17.2962C7.11106 17.9863 8.57064 18.3394 9.88659 18.3394C13.8665 18.3394 17.9107 15.2661 17.9107 10.3153C17.9107 6.04649 14.4603 2.31529 9.90264 2.31529Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.87081 11.3745C9.3011 11.3665 8.84373 10.9091 8.84373 10.3394C8.84373 9.77774 9.30912 9.31234 9.87081 9.32037C10.4405 9.32037 10.8979 9.77774 10.8979 10.3475C10.8979 10.9091 10.4405 11.3745 9.87081 11.3745ZM6.17146 11.3746C5.60977 11.3746 5.14438 10.9092 5.14438 10.3475C5.14438 9.77779 5.60175 9.32042 6.17146 9.32042C6.74117 9.32042 7.19854 9.77779 7.19854 10.3475C7.19854 10.9092 6.74117 11.3666 6.17146 11.3746ZM12.5427 10.3475C12.5427 10.9092 13.0001 11.3746 13.5698 11.3746C14.1395 11.3746 14.5969 10.9092 14.5969 10.3475C14.5969 9.77776 14.1395 9.32039 13.5698 9.32039C13.0001 9.32039 12.5427 9.77776 12.5427 10.3475Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  );
}
