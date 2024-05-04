import { Heading } from "@/app/(components)/heading";
import React from "react";
import blog1 from "../../../public/assets/blog-1.png";
import blog2 from "../../../public/assets/blog2.png";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "./Pagination";

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
    <div className="w-full font-sofiaSans">
      <div className="w-full">
        {/* Blog */}
        <div className="mt-[40px]">
          <Image
            src={blog1}
            width={532}
            height={400}
            alt=""
            className="lg:float-left lg:mr-[24px] max-lg:w-[328px] max-lg:h-[218px] rounded-[12px]"
          />
          {/* Blog content */}
          <div className="max-lg:mt-[24px]">
            <h2 className="lg:text-[36px] font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              Why Your Financial Institution Needs a Corporate Membership
            </h2>
            <p className="lg:text-[24px] max-lg:mt-[24px] text-[16px] leading-[19.2px] lg:eading-[28.8px] font-[400] text-[#424242]">
              The financial services landscape is constantly evolving. New
              technologies, regulations, and competitor strategies emerge at a
              dizzying pace. To stay ahead of the curve and ensure continued
              success, financial institutions need access to the latest trends,
              industry best practices, and valuable connections. The financial
              services landscape is constantly evolving. New technologies,
              regulations, and competitor strategies emerge at a dizzying pace.
              To stay ahead of the curve and ensure continued success, financial
              institutions need access to the latest trends, industry best
              practices, and valuable connections. Building Bridges and
              Networks: One of the most significant advantages of membership is
              the opportunity to network and collaborate with industry leaders
              and decision-makers from other financial institutions. These
              connections foster knowledge sharing, brainstorming sessions, and
              even potential partnerships. Attending industry conferences,
              workshops, and webinars allows you to tap into a wealth of
              insights on the latest trends and innovations. This exchange of
              ideas helps your institution stay informed and adapt its
              strategies to remain competitive. Shaping the Landscape and
              Staying Compliant: Beyond sharing knowledge, industry groups often
              have a strong lobbying presence. They can influence government
              policies and regulations that directly impact your business. By
              joining forces with other institutions, your voice gains strength,
              ensuring policies are shaped in a way that benefits the industry
              as a whole. Additionally, these organizations often provide
              resources and guidance to help members navigate the ever-changing
              regulatory environment. This can save your institution significant
              time and resources when it comes to compliance efforts.
            </p>
          </div>
        </div>
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default Blog;
