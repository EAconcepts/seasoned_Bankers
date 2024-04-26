import React from "react";
import { Heading } from "../(components)/heading";
import { InputOutline } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="w-full px-[16px] lg:px-[96px] font-sofiaSans pt-[48px]">
      <Heading title="Contact Us" className="lg:text-[36px] lg:font-[600] lg:leading-[43.2px]"/>
      <form className="flex  mt-[40px] flex-col gap-y-[40px]">
        {/* Full name */}
        <div className="w-full flex flex-col gap-y-[16px]">
          <label className=" after:content-['**'] after:text-primaryRed text-[36px] after:pl-[2px] leading-[43.2px] tracking-[2%]">
            Full name
          </label>
          <div className="w-full flex gap-x-[24px]">
            <InputOutline type="text" className="w-full " placeholder="first" />
            <InputOutline type="text" className="w-full " placeholder="last" />
          </div>
        </div>
        {/* Email */}
        <div className="w-full flex flex-col gap-y-[16px]">
          <label className=" after:content-['**'] after:text-primaryRed text-[36px] after:pl-[2px] leading-[43.2px] tracking-[2%]">
            Email
          </label>
          <div className="w-full flex ">
            <InputOutline
              type="email"
              className="w-full "
              placeholder="Email"
            />
          </div>
        </div>
        {/* How can we help */}
        <div className="w-full flex flex-col gap-y-[16px]">
          <label className=" after:content-['**'] after:text-primaryRed text-[36px] after:pl-[2px] leading-[43.2px] tracking-[2%]">
            How can we help you?
          </label>
          <div className="w-full flex ">
            <InputOutline className="w-full h-[189px]" placeholder="" />
          </div>
        </div>
        <Button className="text-[] py-[16px] px-[40px] text-[24px] font-[700] leading-[28.8px] w-fit text-white">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
