import React from "react";
import Back from "../(components)/back";
import { Heading } from "../(components)/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import resource1 from "../../public/assets/resource1.png";
import resource2 from "../../public/assets/resource2.png";
import resource3 from "../../public/assets/resource3.png";
import Image from "next/image";
import Blog from "./(components)/blog";
import Events from "../(components)/events";
import Updates from "../(components)/updates";
import Community from "../(components)/community";

const page = () => {
  const resources = [
    {
      title: "Articles",
      content: [
        {
          title:
            "Unleashing the Power of Texting: A Marketing Strategy for SMS",
          content:
            "In today's fast-paced world, attention spans are shrinking, and inboxes are overflowing. But there's one communication channel that cuts through the noise and boasts an impressive near-perfect open rate: SMS marketing...",
          time: "12:00 GST",
          images: resource1,
        },
        {
          title: "What is Influencing Marketing?",
          content:
            "Influencer marketing is a form of marketing in which a company collaborates with an individual who has a large following on social media or other platforms to promote the company’s products or services...",
          time: "12:00 GST",
          images: resource2,
        },
        {
          title: "Optimizing Your Campaigns",
          content:
            "Techniques for tracking results, measuring success, and refining your SMS marketing strategy for maximum impact.",
          time: "12:00 GST",
          images: resource3,
        },
      ],
    },
    {
      title: "Regularoty Reports",
      content: [
        {
          title:
            "Unleashing the Power of Texting: A Marketing Strategy for SMS",
          content:
            "In today's fast-paced world, attention spans are shrinking, and inboxes are overflowing. But there's one communication channel that cuts through the noise and boasts an impressive near-perfect open rate: SMS marketing...",
          time: "12:00 GST",
          images: resource1,
        },
        {
          title: "What is Influencing Marketing?",
          content:
            "Influencer marketing is a form of marketing in which a company collaborates with an individual who has a large following on social media or other platforms to promote the company’s products or services...",
          time: "12:00 GST",
          images: resource2,
        },
        {
          title: "Optimizing Your Campaigns",
          content:
            "Techniques for tracking results, measuring success, and refining your SMS marketing strategy for maximum impact.",
          time: "12:00 GST",
          images: resource3,
        },
      ],
    },
    {
      title: "Whitepaper",
      content: [
        {
          title:
            "Unleashing the Power of Texting: A Marketing Strategy for SMS",
          content:
            "In today's fast-paced world, attention spans are shrinking, and inboxes are overflowing. But there's one communication channel that cuts through the noise and boasts an impressive near-perfect open rate: SMS marketing...",
          time: "12:00 GST",
          images: resource1,
        },
        {
          title: "What is Influencing Marketing?",
          content:
            "Influencer marketing is a form of marketing in which a company collaborates with an individual who has a large following on social media or other platforms to promote the company’s products or services...",
          time: "12:00 GST",
          images: resource2,
        },
        {
          title: "Optimizing Your Campaigns",
          content:
            "Techniques for tracking results, measuring success, and refining your SMS marketing strategy for maximum impact.",
          time: "12:00 GST",
          images: resource3,
        },
      ],
    },
    {
      title: "Career Opportunities",
      content: [
        {
          title:
            "Unleashing the Power of Texting: A Marketing Strategy for SMS",
          content:
            "In today's fast-paced world, attention spans are shrinking, and inboxes are overflowing. But there's one communication channel that cuts through the noise and boasts an impressive near-perfect open rate: SMS marketing...",
          time: "12:00 GST",
          images: resource1,
        },
        {
          title: "What is Influencing Marketing?",
          content:
            "Influencer marketing is a form of marketing in which a company collaborates with an individual who has a large following on social media or other platforms to promote the company’s products or services...",
          time: "12:00 GST",
          images: resource2,
        },
        {
          title: "Optimizing Your Campaigns",
          content:
            "Techniques for tracking results, measuring success, and refining your SMS marketing strategy for maximum impact.",
          time: "12:00 GST",
          images: resource3,
        },
      ],
    },
    {
      title: "Newsletter",
      content: [
        {
          title:
            "Unleashing the Power of Texting: A Marketing Strategy for SMS",
          content:
            "In today's fast-paced world, attention spans are shrinking, and inboxes are overflowing. But there's one communication channel that cuts through the noise and boasts an impressive near-perfect open rate: SMS marketing...",
          time: "12:00 GST",
          images: resource1,
        },
        {
          title: "What is Influencing Marketing?",
          content:
            "Influencer marketing is a form of marketing in which a company collaborates with an individual who has a large following on social media or other platforms to promote the company’s products or services...",
          time: "12:00 GST",
          images: resource2,
        },
        {
          title: "Optimizing Your Campaigns",
          content:
            "Techniques for tracking results, measuring success, and refining your SMS marketing strategy for maximum impact.",
          time: "12:00 GST",
          images: resource3,
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-[16px] lg:px-[96px] lg:py-[40px] font-sofiaSans">
        <Back />
        <div className="lg:mt-[40px]">
          <Heading title="Seasoned Bankers Group Resources" />
        </div>
        <div className="flex flex-col gap-y-[40px] lg:mt-[40px]">
          {resources?.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="">
              <AccordionItem value={`item ${index + 1}`}>
                <AccordionTrigger className="text-[#424242] lg:text-[28px] font-[400] lg:leading-[33.6px] tracking-[2%]pt-[8px] pb-[16px]">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="lg:mt-[40px] flex flex-col gap-y-[24px]">
                  {item?.content.map((subItem, index) => (
                    <div key={index} className="flex gap-x-[24px]">
                      <div className="flex flex-col">
                        <h3 className="font-[600] text-[36px] leading-[43.2px] tracking-[2%] text-black">
                          {subItem.title}
                        </h3>
                        <p className="text-[24px] text-[#424242] font-[400] leading-[28.8px] tracking-[2%] mt-[24px]">
                          {subItem.content}
                        </p>
                        <p className="text-[24px] text-[#424242] font-[400] leading-[28.8px] tracking-[2%] mt-[24px]">
                          {subItem.time}
                        </p>
                      </div>
                      <Image
                        src={subItem?.images}
                        width={486}
                        height={350}
                        alt=""
                        className="lg:w-[486px] shrink-0 rounded-[12px]"
                      />
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="mt-[80px]">
          <Heading title="Blog" />
          <Blog />
        </div>
        <div className="mt-[48px]">
          <Heading title="Related Post" />
          <div className="mt-[40px]">
            <Blog />
          </div>
        </div>
      </div>
      <Updates />
      <Events />
      <Community />
    </>
  );
};

export default page;
