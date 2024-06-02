import type { SVGProps } from "react";
import React from "react";

export default function Graph(props: SVGProps<SVGSVGElement>) {
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
        d="M8.40432 4.55629C8.44518 4.63947 8.47218 4.72855 8.48426 4.82013L8.70768 8.14203L8.81858 9.81169C8.81973 9.98339 8.84667 10.154 8.89853 10.318C9.03247 10.6361 9.3547 10.8384 9.70526 10.8243L15.0471 10.4749C15.2784 10.471 15.5018 10.5576 15.6681 10.7154C15.8067 10.8469 15.8961 11.0189 15.9243 11.2039L15.9338 11.3163C15.7127 14.3772 13.4646 16.9303 10.41 17.5894C7.35541 18.2484 4.22306 16.8562 2.71361 14.1686C2.27845 13.3878 2.00664 12.5296 1.91415 11.6443C1.87551 11.3822 1.8585 11.1175 1.86327 10.8528C1.8585 7.5711 4.19546 4.73396 7.46677 4.05C7.86049 3.98869 8.24646 4.19712 8.40432 4.55629Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M10.5848 1.70395C14.2437 1.79704 17.3188 4.4281 17.9107 7.97193L17.9051 7.99808L17.8889 8.03611L17.8912 8.14049C17.8828 8.27879 17.8294 8.41185 17.7374 8.51933C17.6416 8.63129 17.5106 8.70753 17.3664 8.73712L17.2784 8.74919L11.1153 9.14852C10.9103 9.16873 10.7062 9.10263 10.5538 8.96665C10.4267 8.85333 10.3455 8.70036 10.3225 8.53553L9.90887 2.38138C9.90167 2.36057 9.90167 2.33801 9.90887 2.3172C9.91452 2.14756 9.9892 1.98722 10.1162 1.87198C10.2432 1.75675 10.412 1.69623 10.5848 1.70395Z"
        fill="white"
      />
    </svg>
  );
}