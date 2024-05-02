import React from "react";
import Back from "../(components)/back";
import { Heading } from "../(components)/heading";
import { Input, InputOutline } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Button, ButtonOutline } from "@/components/ui/button";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import eventImg from "../../public/assets/event.png";
import Image from "next/image";
import calendar from "../../public/assets/calendar.svg";
const Events = () => {
  const events = [
    {
      date: "17 Jul",
      title: "Mastering SEO & Content",
      desc: "Learn how to master the science of SEO and content strategies for maximum visibility and engagement. ",
      venue: "Online",
      time: "11:00am GST (2-hours)",
      openTo: "Both to SBG Student Membership and SBG Regular Membership.",
      image: eventImg,
    },
    {
      date: "17 Jul",
      title: "Mastering SEO & Content",
      desc: "Learn how to master the science of SEO and content strategies for maximum visibility and engagement. ",
      venue: "Online",
      time: "11:00am GST (2-hours)",
      openTo: "Both to SBG Student Membership and SBG Regular Membership.",
      image: eventImg,
    },
  ];
  return (
    <div className="px-[16px] lg:px-[96px] pb-[48px ]">
      <Back />
      <div className="flex flex-col mt-[40px] ">
        <Heading title="Events" />
        <div className="mt-[40px]">
          {/* Search Events */}
          <div className="relative">
            <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange p-[1px] rounded-[12px]">
              <Input
                className="h-[57px]  pl-[48px] border-[0.5px] rounded-[12px]"
                placeholder="Search for events"
              />
            </div>
            {/* <InputOutline
              type="search"
              className="h-[57px]  lg:pl-[48px] border-[0.5px]"
              placeholder="Search for events"
            /> */}
            <CiSearch className="text-[#292D32] text-[24px] absolute top-[50%] translate-y-[-50%] left-[12px]" />
            <Button className="p-[12px] absolute right-[12px] top-[50%] translate-y-[-50%] rounded-[12px] text-[14px] font-[700] leading-[16.8px]">
              Find Event
            </Button>
          </div>
          {/* Upcoming events */}
          <div className="mt-[24px]">
            <Heading title="Upcoming Events" />
            {/* Navigations */}
            <div className="flex justify-between mt-[24px] items-center">
              <div className=" flex gap-x-[12px] lg:gap-x-[24px]">
                {/* Previous */}
                <div className="border-[1.5px] border-[#292D32] rounded-md flex items-center justify-center size-[28px]">
                  <IoChevronBackOutline />
                </div>
                {/* Next */}
                <div className="border-[1.5px] border-[#292D32] rounded-md flex items-center justify-center size-[28px]">
                  <IoChevronForwardOutline />
                </div>
              </div>
             
            </div>
            {/* Events */}
            <div className="flex py-[8px] px-[12px] mt-[24px] flex-col gap-y-[24px]">
              {events?.map((item, index) => (
                <div key={index} className="flex max-lg:flex-col gap-y-[24px]">
                  <div className="flex max-lg:flex-col gap-y-[24px] lg:gap-x-[24px]">
                    {/* Calendar & title */}
                    <div className="flex gap-x-[12px]">
                      <div className="w-[44px] lg:w-[100px] h-[54.84px] lg:h-[125px]">
                        <Image
                          src={calendar}
                          width={100}
                          height={125}
                          alt="calendar"
                          className="lg:w-[100px] lg:h-[125px]"
                        />
                      </div>
                      <h2 className="text-[24px] lg:hidden lg:text-[36px] lg:leading-[43.2px] font-[600] leading-[28.8px] tracking-[2%] text-black ">
                        {item.title}
                      </h2>
                    </div>
                    {/* Description */}
                    <div className="">
                      <h2 className="text-[24px] hidden lg:block lg:text-[36px] lg:leading-[43.2px] font-[600] leading-[28.8px] tracking-[2%] text-black ">
                        {item.title}
                      </h2>
                      <p className="font-[400] lg:mt-[4px] lg:text-[24px] lg:leading-[28.8px] text-[14px] leading-[16.8px] tracking-[2%] text-[#424242]">
                        {item.desc}
                      </p>
                      {/* Event details */}
                      <div className="flex flex-col lg:mt-[24px] gap-y-[24px] leading-[16.8px] tracking-[2%]">
                        {/* Venue */}
                        <div className="flex pl-[-2px]  lg:text-[24px] text-[14px] lg:leading-[28.8px] leading-[16.8px]">
                          <h4 className="font-[700]">Venue:</h4>
                          <span className="font-[400] pl-[2px]  ">
                            {item.venue}
                          </span>
                        </div>
                        {/* Time */}
                        <div className="flex pl-[-2px]  lg:text-[24px] text-[14px] lg:leading-[28.8px] leading-[16.8px]">
                          <h4 className="font-[700]  ">Time:</h4>
                          <span className="pl-[2px] font-[400]  ">
                            {item.time}
                          </span>
                        </div>
                        {/* Open to */}
                        <div className="inline  lg:text-[24px] text-[14px] lg:leading-[28.8px] leading-[16.8px] ">
                          <h4 className="inline font-[700]  ">Open To:</h4>
                          <span className="font-[400] pl-[2px]  ">
                            {item.openTo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image src={item.image} width={457} height={351} alt="" className="lg:w-[457px] lg:h-[351px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
