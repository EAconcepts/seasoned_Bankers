import { Button } from "@/components/ui/button";
import React from "react";
import { twMerge } from "tailwind-merge";

const Events = () => {
  const events = [
    {
      date: "17 Jul",
      title: "Mastering SEO & Content",
      venue: "Nnamdi Azikiwe Stadium, Lagos",
      time: "2:00pm GST",
    },
    {
      date: "17 Jul",
      title: "Mastering SEO & Content",
      venue: "Nnamdi Azikiwe Stadium, Lagos",
      time: "2:00pm GST",
    },
  ];
  return (
    <div className="p-[16px] bg-[#FEF9EC] flex flex-col font-sofiaSans">
      <div className="">
        <h2 className="font-sofiaSans font-[600] text-[28px] leading-[33.6px] tracking-[2%] text-black">
          Upcoming Events
        </h2>
        {/* Underline */}
        <Underline  />
        {/* Events */}
        <div className="flex flex-col gap-y-[24px] pt-[24px]">
          {events?.map((item, index) => (
            <div key={index} className="flex gap-x-[25px]">
              {/* Calendar */}
              <div className="w-[40px]"></div>
              {/* event */}
              <div className="flex flex-col">
                <h1 className="font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
                  Mastering SEO & Content
                </h1>
                <div className="flex flex-col font-[400] text-[14px] leading-[16.8px] tracking-[2%] text-[#424242]">
                  <small>Nnamdi Azikiwe Stadium, Lagos</small>
                  <small>2:00pm GST</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-fit mt-[40px] font-[700] py-[8px] px-[12px] rounded-[12px] text-[16px] leading-[19.2px]">
          View All Events
        </Button>
      </div>
    </div>
  );
};

// interface UnderlineProps  {
//   className?: String
// }
export const Underline = ({className }: {className?:string}) => {
  return (
    <div className={twMerge("w-[120px] h-[2px] mt-[2px] bg-gradient-to-tr from-primaryRed to-primaryOrange", className)}></div>
  );
};
export default Events;
