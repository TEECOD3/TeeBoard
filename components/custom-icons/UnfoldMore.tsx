import React from "react";
import { SVGProps } from "react";

const UnfoldMore: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_452)">
        <path
          d="M8.06246 3.62386L9.97018 5.53158L10.8187 4.68303L8.06246 1.92075L5.30017 4.68303L6.15473 5.53158L8.06246 3.62386ZM8.06246 11.0501L6.15473 9.14241L5.30619 9.99096L8.06246 12.7532L10.8247 9.99096L9.97018 9.14241L8.06246 11.0501Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_452">
          <rect
            width="14.4433"
            height="14.4433"
            fill="white"
            transform="translate(0.840668 0.115356)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UnfoldMore;
