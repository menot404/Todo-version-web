import React from "react";
import type { LoaderProps } from "@/types/loader-props";

const Loader: React.FC<LoaderProps> = ({ w = "25px", h = "25px", br_color = "border-blue-600" }) => {
  return (
    <div
      className={`animate-spin rounded-full border-t-2 border-b-2 my-5 ${w} ${br_color} ${h}`}
    ></div>
  );
};

export default Loader;