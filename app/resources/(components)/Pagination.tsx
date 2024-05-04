"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ id }: { id?: string }) => {
  console.log(id);
  console.log(Number(id));
  const router = useRouter();
  return (
    <div className="flex  items-center mt-[40px] gap-x-[16px] text-[#8E98A8] ">
      {/* previous */}
      <button
        disabled={id === "1"}
        onClick={() => {
          router.push(`/updates/${Number(id) - 1}`);
        }}
        className={` flex gap-x-[16px] items-center ${
         id && id > "1" && "text-primaryRed border-[#D7322C]"
        } shrink-0`}
      >
        <span className="lg:text-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] tracking-[2%]">
          Previous
        </span>
        <span className="size-[23.33px] flex items-center justify-center rounded-[4px] border-[#8E98A8] border-[1.5px] ">
          <IoIosArrowBack className="text-[#8E98A8] " />
        </span>
      </button>

      {/* Next */}
      <button
        disabled={id === "3"}
        onClick={() => {
          router.push(`/updates/${Number(id) + 1}`);
        }}
        className={` flex gap-x-[16px] items-center ${
         id && id < "3" && "text-primaryRed border-[#D7322C]"
        } shrink-0`}
      >
        <span
          className={`size-[23.33px] flex items-center justify-center rounded-[4px] text-[#8E98A8] border-[#8E98A8] border-[1.5px]  `}
        >
          <IoIosArrowForward className=" " />
        </span>
        <span className="lg:text-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] tracking-[2%]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Pagination;
