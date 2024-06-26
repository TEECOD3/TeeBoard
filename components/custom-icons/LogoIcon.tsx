import type { SVGProps } from "react";
import React from "react";

export default function Logoicon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.257935 3.67726C0.257935 1.90462 1.69494 0.467621 3.46757 0.467621H5.87491C11.1927 0.467621 15.5037 4.77858 15.5037 10.0964C15.5037 15.4143 11.1927 19.7252 5.87491 19.7252H3.46757C1.69494 19.7252 0.257935 18.2882 0.257935 16.5156V3.67726Z"
        fill="white"
      />
    </svg>
  );
}
