import { Heading } from "@/app/(components)/heading";
import Image from "next/image";
import React from "react";
import offer from "../../../public/assets/offer1.png"

const Offers = () => {
  const offers = [
    {
      title: "MENTORSHIP PROGRAMS",
      desc: "Tailored mentorship programs designed to provide guidance, support, and career development opportunities for aspiring banking professionals.",
    },
    {
      title: "LEADERSHIP DEVELOPMENT",
      desc: "Workshops, seminars, and coaching sessions focused on developing leadership skills, strategic thinking, and effective decision-making.",
    },
    {
      title: "CONSULTING SERVICES",
      desc: "Expert advisory services to help banks and financial institutions navigate challenges, optimize performance, and capitalize on growth opportunities.",
    },
    {
      title: "INDUSTRY INSIGHT",
      desc: "Thought leadership content, research reports, and industry analysis to keep our members informed and ahead of market trends.",
    },
    {
      title: "NETWORKING EVENTS",
      desc: "Exclusive networking events, conferences, and forums for members to connect, share knowledge, and build valuable relationships.",
    },
  ];
  return (
    <div>
      <Heading title="What We Offer" />
      <div className="">
        <div className="grid grid-cols-3 tracking-[2%]">
          <div className="grid grid-cols-2">
            {offers?.map((offer, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-black text-[36px] font-[600] leading-[43.2px] ">
                  {offer.title}
                </h2>
                <p className="mt-[16px] text-[#424242] text-[24px] leading-[28.8px] font-[400]">
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
          <Image src={offer} width={347} height={818} alt='' className="rounded-[12px]  h-full"/>     
            </div>
      </div>
    </div>
  );
};

export default Offers;
