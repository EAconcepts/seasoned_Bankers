import React from "react";
import { Underline } from "./events";
import Instagram from "./instagram";

const Follow = () => {
  return (
    <div className="mt-[24px] py-[40px] px-[16px] lg:px-[96px] ">
      <h1 className="font-[600] text-[28px] leading-[33.6px] tracking-[2%] text-black lg:text-[36px] lg:leading-[43.2px]">
        Follow Us on Instagram
      </h1>
      <Underline />
      <div className="mt-[40px]">
        <Instagram />
      </div>
    </div>
  );
};

export default Follow;
