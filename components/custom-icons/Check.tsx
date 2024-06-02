import type { SVGProps } from "react";
import React from "react";

export default function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.2204 6.25465L7.91872 12.5563L4.48579 9.13297L3.13747 10.4813L7.91872 15.2625L15.5687 7.61253L14.2204 6.25465ZM9.83122 0.918777C4.55272 0.918777 0.268723 5.20278 0.268723 10.4813C0.268723 15.7598 4.55272 20.0438 9.83122 20.0438C15.1097 20.0438 19.3937 15.7598 19.3937 10.4813C19.3937 5.20278 15.1097 0.918777 9.83122 0.918777ZM9.83122 18.1313C5.6046 18.1313 2.18122 14.7079 2.18122 10.4813C2.18122 6.25465 5.6046 2.83128 9.83122 2.83128C14.0578 2.83128 17.4812 6.25465 17.4812 10.4813C17.4812 14.7079 14.0578 18.1313 9.83122 18.1313Z"
        fill="#FF6422"
      />
    </svg>
  );
}