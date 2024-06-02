import type { SVGProps } from "react";
import React from "react";

export default function Chart(props: SVGProps<SVGSVGElement>) {
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
        d="M13.6383 2.00938H6.14202C3.41027 2.00938 1.86252 3.55714 1.86252 6.28889V13.778C1.86252 16.5098 3.41027 18.0575 6.14202 18.0575H13.6383C16.37 18.0575 17.9107 16.5098 17.9107 13.778V6.28889C17.9107 3.55714 16.37 2.00938 13.6383 2.00938Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M6.1704 7.92224C5.80665 7.92224 5.50708 8.22181 5.50708 8.5927V14.1061C5.50708 14.4699 5.80665 14.7694 6.1704 14.7694C6.54129 14.7694 6.84086 14.4699 6.84086 14.1061V8.5927C6.84086 8.22181 6.54129 7.92224 6.1704 7.92224Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M9.915 5.29039C9.55124 5.29039 9.25168 5.58996 9.25168 5.96085V14.1062C9.25168 14.4699 9.55124 14.7695 9.915 14.7695C10.2859 14.7695 10.5855 14.4699 10.5855 14.1062V5.96085C10.5855 5.58996 10.2859 5.29039 9.915 5.29039Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M13.6099 10.8324C13.239 10.8324 12.9394 11.1319 12.9394 11.5028V14.1062C12.9394 14.4699 13.239 14.7695 13.6027 14.7695C13.9736 14.7695 14.2732 14.4699 14.2732 14.1062V11.5028C14.2732 11.1319 13.9736 10.8324 13.6099 10.8324Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  );
}
