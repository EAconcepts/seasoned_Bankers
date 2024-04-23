import Image from "next/image";
import React from "react";
import rectangle from "../../public/assets/footer-rect.png";
import { GoTriangleRight } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Input, InputOutline } from "@/components/ui/input";
import logo from "../../public/assets/logo.png";
import mail from "../../public/assets/mail.svg";
import instagram from "../../public/assets/instagram.svg";

const Footer = () => {
  const products = [
    "Membership Program",
    "Leadership Workshops",
    "Consulting Services",
    "Networking Events",
    "Career Opportunities",
  ];
  const support = [
    "FAQ",
    "Terms & Conditions",
    "Privacy Policies",
    "Contact Us",
  ];
  const resouces = [
    "Articles",
    "Blogs",
    "Regulatory Reports",
    "Newsletter",
    "Whitepaper",
  ];
  return (
    <div className="flex flex-col lg:mt-[40px] lg:py-[23px] w-full relative">
      <div className="ml-[32.5px] lg:ml-[96.5px] w-fit font-[600] bg-[#D7322C] text-[20px] leading-[24px] tracking-[2%] text-white py-[12px] px-[16px] absolute lg:text-[32px] lg:leading-[38.4px]">
        <Image
          src={rectangle}
          width={130}
          height={23}
          alt=""
          className="absolute left-[-18px] top-0 z-[-10]"
        />
        Become a Member Today!{" "}
      </div>
      <div className="bg-[#202020] lg:pt-[49px] lg:py-[159px] pt-[40px] mt-[23px] lg:px-[96px] px-[16px] lg:flex lg:gap-x-[24px]">
        <div className="pt-[16px] flex max-lg:flex-wrap lg:justify-between gap-x-[24px]">
          {/* Our Products */}
          <div className="lg:w-full">
            <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white lg:text-[20px] lg:leading-[24px]">
              Our Products
            </h4>
            <div className="mt-[24px] lg:mt-[40px] flex flex-col gap-y-[24px]">
              {products?.map((product, index) => (
                <div
                  key={index}
                  className="flex gap-x-[8px] lg:gap-x-[16px] pb-[16px]  pl-[8px] pt-[8px] border-b-[0.5px] border-b-[#A7BAC6]"
                >
                  <GoTriangleRight className="text-[#CFCFCF]" />
                  <span className="text-[#CFCFCF] lg:text-[20px] lg:leading-[24px] font-[400] text-[12px] leading-[16.8px] tracking-[2%]">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Resources */}
          <div className="lg:w-full">
            <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white lg:text-[20px] lg:leading-[24px]">
              Resources
            </h4>
            <div className="mt-[24px] lg:mt-[40px] flex flex-col gap-y-[24px]">
              {resouces?.map((product, index) => (
                <div
                  key={index}
                  className="flex gap-x-[8px]  pb-[16px]  pl-[8px] pt-[8px] lg:gap-x-[16px] border-b-[0.5px] border-b-[#A7BAC6]"
                >
                  <GoTriangleRight className="text-[#CFCFCF]" />
                  <span className="text-[#CFCFCF] lg:text-[20px] lg:leading-[24px] font-[400] text-[12px] leading-[16.8px] tracking-[2%]">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex max-lg:flex-col lg:justify-betwee lg:w-full gap-x-[24px]">
            {/* Support */}
            <div className="lg:w-full lg:shrink-0 max-lg:mt-[24px]">
              <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white lg:text-[20px] lg:leading-[24px]">
                Support
              </h4>
              <div className="mt-[24px] lg:mt-[40px] flex flex-col gap-y-[24px]">
                {support?.map((product, index) => (
                  <div
                    key={index}
                    className="flex gap-x-[8px] pb-[16px]  pl-[8px] pt-[8px] lg:gap-x-[16px] border-b-[0.5px] border-b-[#A7BAC6]"
                  >
                    <GoTriangleRight className="text-[#CFCFCF]" />
                    <span className="text-[#CFCFCF] font-[400] text-[12px] lg:text-[20px] lg:leading-[24px] leading-[16.8px] tracking-[2%]">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* News letter */}
            <div className=" lg:w-full flex flex-col shrink-0 max-lg:mt-[24px] ">
              <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] lg:text-[20px] lg:leading-[24px] text-white">
                Join Our Newsletter
              </h4>
              <form className="mt-[40px] lg:w-full  ">
                <label className="text-[14px] mb-[8px] font-[400] leading-[16.8px] lg:text-[20px] lg:leading-[24px] tracking-[2%] text-[#CFCFCF]">
                  Email
                </label>
                <InputOutline className="w-full" />
                <div className="mt-[32px]">
                  <Button className="h-fit text-[14px] font-[700] leading-[16.8px] lg:text-[20px] lg:leading-[24px] text-white px-[20px] lg:py-[16px] py-[8px]">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:mt-[40px] lg:px-[96px] px-[16px]">
        {/* Logo */}
        <Image
          src={logo}
          width={81}
          height={109.94}
          alt="logo"
          className="lg:hidden"
        />

        <div className="mt-[24px] lg:flex lg:gap-x-[24px] ">
          {/* Logo */}
          <Image
            src={logo}
            width={81}
            height={109.94}
            alt="logo"
            className="lg:w-[161px] lg:h-[184.73px]"
          />
          {/* Seasoned Bankers */}
          <div className="lg:w-[440px]">
            <h4 className="text-[20px] lg:text-[32px] lg:leading-[38.4px] font-[600] leading-[24px] tracking-[2%] text-black">
              Seasoned Bankers Group
            </h4>
            <p className="text-[#424242] lg:mt-[8px] lg:text-[20px] lg:leading-[24px] text-[12px] leading-[14.4px] font-[400] tracking-[2%]">
              CORPORATE MINDS FOR LEADERSHIP AND MENTORSHIP INITIATIVE
            </p>
            {/* Social */}
            <div className="flex mt-[16px] lg:mt-[24px] gap-x-[16px]">
              <div className="bg-[#424242] rounded-full size-[28.39px] flex justify-center items-center">
                <Image
                  src={instagram}
                  width={16.56}
                  height={16.56}
                  alt="instagram"
                  className=""
                />
              </div>
              <div className="bg-[#424242] rounded-full size-[28.39px] flex justify-center items-center">
                <Image
                  src={mail}
                  width={16.56}
                  height={16.56}
                  alt="instagram"
                  className=""
                />
              </div>
            </div>
          </div>
          {/* Vision */}
          <div className="max-lg:mt-[24px] lg:w-[440px] lg:text-right">
            <h4 className="text-[20px] font-[600] leading-[24px] tracking-[2%] text-black lg:text-[36px] lg:leading-[43.2px]  ">
              Vision For The Future
            </h4>
            <p className="text-[14px] font-[400] lg:text-[24px] lg:leading-[28.8px] leading-[16.8px] tracking-[2%] text-[#424242] ">
              {" "}
              At Seasoned Bankers Group, we aim to empower a community of driven
              bankers poised to make a lasting impact on the future of finance.
            </p>
          </div>
        </div>
        <p className="w-full mt-[24px] lg:text-[24px] lg:leading-[28.8px] text-[14px] font-[300] leading-[16.8px] tracking-[2%] text-black text-center">
          Copyright (C) 2024 - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
