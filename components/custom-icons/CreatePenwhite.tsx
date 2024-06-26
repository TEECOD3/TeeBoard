import type { SVGProps } from "react";
import React from "react";

export default function CreatePenWhite(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_115)">
        <path
          d="M3.46886 17.3953V20.9812H7.05479L17.6309 10.4051L14.045 6.81918L3.46886 17.3953ZM6.26111 19.0687H5.38136V18.189L14.045 9.52536L14.9247 10.4051L6.26111 19.0687ZM20.404 6.28368L18.1664 4.04605C17.9752 3.8548 17.7361 3.76874 17.4875 3.76874C17.2389 3.76874 16.9998 3.86436 16.8181 4.04605L15.0682 5.79599L18.6541 9.38193L20.404 7.63199C20.777 7.25905 20.777 6.65661 20.404 6.28368Z"
          fill="#fff"
          fillOpacity="0.9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_115">
          <rect
            width="22.95"
            height="22.95"
            fill="white"
            transform="translate(0.600052 0.899994)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
