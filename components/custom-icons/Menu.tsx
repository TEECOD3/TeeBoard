import React from "react";
import { SVGProps } from "react";

const Menu: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.94 6C3.42085 6 3 6.42085 3 6.94V7.06C3 7.57915 3.42085 8 3.94 8H20.06C20.5791 8 21 7.57915 21 7.06V6.94C21 6.42085 20.5791 6 20.06 6H3.94ZM4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13ZM7.94 11C7.42085 11 7 11.4209 7 11.94V12.06C7 12.5791 7.42085 13 7.94 13H20.06C20.5791 13 21 12.5791 21 12.06V11.94C21 11.4209 20.5791 11 20.06 11H7.94ZM3 16.94C3 16.4209 3.42085 16 3.94 16H20.06C20.5791 16 21 16.4209 21 16.94V17.06C21 17.5791 20.5791 18 20.06 18H3.94C3.42085 18 3 17.5791 3 17.06V16.94Z"
      fill="#637381"
    />
  </svg>
);

export default Menu;
