import React from "react";
import { Underline } from "./events";
import benefit1 from "../../public/assets/benefit1.png";
import benefit2 from "../../public/assets/benefit2.png";
import benefit3 from "../../public/assets/benefit3.png";
import Image from "next/image";

const Membership = () => {
  const benefits = [
    {
      image: benefit1,
      title: "Build Your Network and Elevate Your Influence",
      content:
        "Participate in exclusive networking events, conferences, and forums. Connect with fellow aspiring and seasoned bankers, share knowledge, and forge valuable relationships within the banking community.",
    },
    {
      image: benefit2,
      title: "Accelerate Your Career with Personalized Mentorship",
      content:
        "Gain access to our tailored mentorship programs, connecting you with experienced banking professionals who provide guidance, support, and valuable career development opportunities.",
    },
    {
      image: benefit3,
      title: "Stay Ahead of the Curve with Industry Expertise",
      content:
        "Leverage exclusive thought leadership content, research reports, and insightful industry analysis to keep you informed about market trends and position yourself for success.",
    },
  ];
  return (
    <div className="p-[16px] ">
      <h1 className="text-[28px] font-[600] leading-[33.6px] tracking-[2%] text-balance">
        Membership Benefits
      </h1>
      <Underline />
      <div className="flex flex-col mt-[40px] gap-y-[32px]">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col">
            <Image
              src={benefit.image}
              width={328}
              height={203.82}
              alt={benefit.title}
              className="rounded-[8.1px] w-[328px] h-[203.82px]"
            />
            <div className="mt-[24px] flex flex-col gap-y-[16px]">
            <h2 className="font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              {benefit.title}
            </h2>
            <p className="font-[400] text-[16px] tracking-[2%] leading-[19.2px] text-[#424242]">
              {benefit.content}
            </p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
