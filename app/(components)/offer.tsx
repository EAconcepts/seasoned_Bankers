import React from "react";
import { Underline } from "./events";
import Image from "next/image";
import offerImage from "../../public/assets/offer.png"

const Offer = () => {
  const whatWeOffer = [
    {
      title: "MENTORSHIP PROGRAMS",
      content:
        "Tailored mentorship programs designed to provide guidance, support, and career development opportunities for aspiring banking professionals.",
    },
    {
      title: "LEADERSHIP DEVELOPMENT",
      content:
        "Workshops, seminars, and coaching sessions focused on developing leadership skills, strategic thinking, and effective decision-making.",
    },
    {
      title: "CONSULTING SERVICES",
      content:
        "Expert advisory services to help banks and financial institutions navigate challenges, optimize performance, and capitalize on growth opportunities.",
    },
    {
      title: "INDUSTRY INSIGHT",
      content:
        "Thought leadership content, research reports, and industry analysis to keep our members informed and ahead of market trends.",
    },
    {
      title: "NETWORKING EVENTS",
      content:
        "Exclusive networking events, conferences, and forums for members to connect, share knowledge, and build valuable relationships.",
    },
  ];
  return (
    <div className="p-[16px]">
      <h1 className="text-[28px] font-[600] leading-[33.6px] tracking-[2%] text-balance">
        Membership Benefits
      </h1>
      <Underline />
      <div className="flex flex-col mt-[40px] gap-y-[24px]">
        {whatWeOffer?.map((offer, index) => (
          <div key={index} className=" flex flex-col gap-y-[16px]">
            <h1 className="font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              {offer.title}
            </h1>
            <p className="text-[#424242] font-[400] text-[16px] leading-[19.2px] tracking-[2%]">
              {offer.content}
            </p>
          </div>
        ))}
        <Image src={offerImage} height={328} width={328} alt='woman' className="size-[328px] rounded-[10.24px]"/>
      </div>
    </div>
  );
};

export default Offer;
