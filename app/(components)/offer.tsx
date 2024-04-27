import React from "react";
import { Underline } from "./events";
import Image, { StaticImageData } from "next/image";
import offerImage2 from "../../public/assets/offer2.png";
import offerImage from "../../public/assets/offer.png";

const Offer = ({pic}:{pic?: StaticImageData}) => {
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
    <div className="p-[16px] lg:py-[40px] lg:px-[96px] lg:mt-[40px]">
      <h1 className="text-[28px] font-[600] leading-[33.6px] tracking-[2%] lg:text-[36px] lg:leading-[43.2px] text-black">
        What We Offer
      </h1>
      <Underline />
      <div className="lg:flex gap-x-[24px]">
        <div className="flex max-lg:flex-col lg:grid lg:grid-cols-2 mt-[40px] gap-y-[24px] lg:gap-[24px]">
          {whatWeOffer?.map((offer, index) => (
            <div key={index} className=" flex flex-col gap-y-[16px]">
              <h1 className="font-[600] lg:text-[36px] lg:leading-[43.2px] text-[24px] leading-[28.8px] tracking-[2%] text-black">
                {offer.title}
              </h1>
              <p className="text-[#424242] lg:text-[24px] lg:leading-[28.8px] font-[400] text-[16px] leading-[19.2px] tracking-[2%]">
                {offer.content}
              </p>
            </div>
          ))}
            <Image
          src={pic || offerImage}
          height={328}
          width={328}
          alt="woman"
          className="size-[328px] max-lg:object-cover max-lg:object-top rounded-[10.24px] lg:hidden"
        />
        </div>
        <Image
          src={pic || offerImage2}
          height={3478}
          width={818}
          alt="woman"
          className="w-[328px] h-[818px] rounded-[10.24px] max-lg:hidden"
        />
      </div>
    </div>
  );
};

export default Offer;
