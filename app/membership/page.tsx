import React from "react";
import Back from "../(components)/back";
import Events, { Underline } from "../(components)/events";
import Image from "next/image";
import bePart from "../../public/assets/bePart.png";
import { Button } from "@/components/ui/button";
import Updates from "../(components)/updates";
import Community from "../(components)/community";

const Membership = () => {
  const whyJoin = [
    {
      title: "Personalized Mentorship:",
      desc: "The personalized mentorship program is the cornerstone benefit. Having a seasoned banker as your mentor provides invaluable career guidance, support, and access to industry insights.",
    },
    {
      title: "Stay Ahead of the Curve:",
      desc: "Gain access to exclusive thought leadership content, research reports, and industry analysis. This keeps you informed about market trends and positions you for success in the evolving financial landscape.",
    },
    {
      title: "Expand Your Network:",
      desc: "Connect with fellow aspiring and seasoned bankers through exclusive networking events, conferences, and online forums. Build valuable relationships within the banking community and gain access to potential career opportunities.",
    },
    {
      title: "Lifelong Learning:",
      desc: "The Seasoned Bankers Group fosters a culture of lifelong learning. Participate in workshops, webinars, and access educational resources to continuously develop your skills and knowledge in the banking sector.",
    },
  ];
  const membershipOptions = [
    {
      title: "SBG Student Membership",
      benefits: [
        "Limited access to educational resources (e.g., white papers, webinars) on various banking topics.",
        "Free webinars on basic banking topics.",
        "Free membership in online forums to connect with other aspiring bankers.",
      ],
      dues: 25,
    },
    {
      title: "SBG Regular Membership",
      benefits: [
        "Access to a curated library of career development resources ",
        "Participation in exclusive online mentoring sessions with experienced bankers on a rotational basis.",
        "Discounts on workshops and online courses related to banking skills development.",
        "Priority access to member-only networking events (Discounted tickets)",
      ],
      dues: 115,
    },
    {
      title: "SBG Professional Membership",
      benefits: [
        "Free registration for one online course per quarter on advanced banking topics.",
        "Eligibility to apply for the personalized mentorship program with a dedicated mentor based on your career goals.",
        "Discounts on workshops and online courses related to advanced banking skills development.",
        "Priority access to member-only networking events (Free tickets)",
      ],
      dues: 25,
    },
    {
      title: "SBG Seasoned Leader",
      benefits: [
        "Access to exclusive leadership development workshops and resources.",
        "Invitation to participate in Seasoned Bankers Group committees and initiatives.",
        "Opportunity to contribute guest articles and thought leadership pieces to the Seasoned Bankers Group blog.",
        "Free registration for two online courses per quarter on leadership and management in banking.",
      ],
      dues: 256,
    },
    {
      title: "SBG Corporate Membership",
      desc: "For financial institutions to sponsor their employees' access to the group's benefits.",
      benefits: [
        "Access to the Seasoned Bankers Group benefits at a discounted group rate",
        "Access to exclusive workshops, webinars, and online courses on relevant banking topics",
        "Connections between your employees and other banking professionals through member-only events and online forums.",
        "Access to exclusive thought leadership content, research reports, and industry analysis.",
      ],
      dues: 300,
    },
  ];
  return (
    <main className="px-[16px lg:px-[96px lg:pt-[40px] pt-[24px] mt-[16px]">
      <div className="px-[16px] lg:px-[96px]">
        <Back />
      </div>
      <div className="mt-[40px] px-[16px] lg:px-[98px] pb-[48px]">
        <h2 className="text-[28px] lg:text-[36px] lg:leading-[43.2px] font-[600] leading-[33.6px] tracking-[2%] text-black">
          Join Seasoned Bankers Group Today!
        </h2>
        <Underline />
        <div className="flex  max-lg:flex-col lg:gap-x-[24px] py-[8px] mt-[24px] gap-y-[24px]">
          <Image
            src={bePart}
            alt=""
            width={439}
            height={302}
            className="lg:h-[302px] lg:W-[439px] rounded-[12px] w-full"
          />
          <p className="font-[400] text-[16px] leading-[19.2px] tracking-[2%] text-[#424242] lg:text-[24px] lg:leading-[28.8px]">
            As a member of the Seasoned Bankers Group, you&apos;ll gain access
            to a personalized mentorship program. This program connects you with
            a seasoned banking professional who can provide tailored guidance,
            career advice, and support based on your specific goals and
            aspirations. This direct connection with an experienced mentor is a
            highly valuable benefit and sets the Seasoned Bankers Group apart
            from other networking organizations.
          </p>
        </div>
        {/* Why Join */}
        <h2 className="font-[600] mt-[32px] text-[28px] leading-[33.6px] tracking-[2%] text-black lg:text-[36px] lg:leading-[43.2px]">
          Why Join The Seasoned Bankers Group?
        </h2>
        <ol className="flex max-lg:pt-[24px] lg:mt-[40px] flex-col gap-y-[40px]">
          {whyJoin.map((item, index) => (
            <li key={index} className="">
              <div className="inline tracking-[2%] lg:leading-[28.8px] leading-[19.2px]">
                <h5 className="inline text-[16px] lg:text-[24px] font-[600] ">
                  {index + 1}. {item.title}
                </h5>
                <p className="inline pl-[2px] lg:text-[24px] font-[400] text-[16px] ">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
        {/* Membership Options */}
        <div className="max-lg:mt-[24px] lg:mt-[40px]">
          <h2 className="text-[28px] font-[600] leading-[33.6px] tracking-[2%] text-black lg:text-[36px] lg:leading-[43.2px]">
            Seasoned Bankers Group Membership Options
          </h2>
          <Underline />
          <p className="font-[400] mt-[24px] text-[16px] leading-[19.2px] tracking-[2%] lg:text-[24px] lg:leading-[28.8px] text-[#424242] ">
            The Seasoned Bankers Group offers various membership tiers to cater
            to the diverse needs of aspiring and experienced banking
            professionals. Here&apos;s an outline of potential membership types
            and their associated benefits:
          </p>
          <div className="mt-[32px] gap-y-[40px] flex flex-col">
            {membershipOptions?.map((options, index) => (
              <div
                key={index}
                className="flex flex-col mt-[32px] gap-y-[24px] lg:gap-y-[40px] lg:text-[36px] lg:leading-[43.2px]"
              >
                <h3 className="text-[24px] font-[600] leading-[28.8px] tracking-[2%] text-black ">
                  {options.title}
                </h3>
                {options?.desc && (
                  <p className="text-[#424242] -mt-[20px] text-[14px] lg:text-[24px] leading-[16.8px] tracking-[2%] font-[400]">
                    {options.desc}
                  </p>
                )}
                <ul className="flex flex-col gap-y-[12px] list-disc list-inside ">
                  {options?.benefits?.map((benefit, index) => (
                    <li
                      key={index}
                      className="font-[400] text-[14px] lg:text-[24px] leading-[28.8px] tracking-[2%]"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="bg-[#FEF9EC] rounded-[12px] py-[16px] px-[20px] text-[16px] lg:text-[24px] lg:leading-[28.8px] lg:w-fit font-[400] leading-[19.2px] text-black">
                  {options.title} - Annual Dues: ${options.dues}
                </p>
              </div>
            ))}
          </div>
          <Button className="font-[700] lg:mt-[40px] lg:text-[24px] lg:leading-[28.8px] text-[16px] leading-[19.2px] text-white py-[12px] px-[16px]">
            Become a Member Today
          </Button>
        </div>
      </div>
      <Updates />
      <Events />
      <div className="mb-[24px] ">
        <Community />
      </div>
    </main>
  );
};

export default Membership;
