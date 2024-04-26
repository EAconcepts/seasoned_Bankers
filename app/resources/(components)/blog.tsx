import { Heading } from "@/app/(components)/heading";
import React from "react";
import blog1 from "../../../public/assets/blog1.png";
import blog2 from "../../../public/assets/blog2.png";
import Image from "next/image";

const Blog = () => {
  const blog = [
    {
      title: "Benefits of Corporate Membership for Financial Institutions",
      content:
        "A comprehensive corporate membership program designed to empower your financial institution by investing in your employees' professional development and career growth...",
      date: "Jan 2, 2024",
      image: blog1,
    },
    {
      title: "Finance: Doing It The Right Way",
      content:
        "A comprehensive corporate membership program designed to empower your financial institution by investing in your employees' professional development and career growth...",
      date: "Jan 2, 2024",
      image: blog2,
    },
    {
      title: "Benefits of Corporate Membership for Financial Institutions",
      content:
        "A comprehensive corporate membership program designed to empower your financial institution by investing in your employees' professional development and career growth...",
      date: "Jan 2, 2024",
      image: blog1,
    },
  ];
  return (
    <div>
      <div className="lg:grid mt-[40px] lg:grid-cols-3 gap-x-[24px]">
        {blog?.map((story, index) => (
          <div key={index} className="flex flex-col gap-y-[24px]">
            <Image
              src={story.image}
              width={346.67}
              height={231}
              alt=""
              className="rounded-[12px]"
            />
            <div className="flex-col flex">
              <h2 className="text-[36px] leading-[43.2px]  tracking-[2%] text-black font-[600]">
                {story.title}
              </h2>
              <p className="text-[24px] text-[#424242] font-[400] leading-[28.8px] tracking-[2%] mt-[24px]">
                {story.content}
              </p>
              <p className="text-[24px] text-[#424242] font-[400] leading-[28.8px] tracking-[2%] mt-[8px]">
                {story.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
