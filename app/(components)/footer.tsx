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
    <div className="flex flex-col w-full relative">
      <div className="ml-[32.5px] w-fit font-[600] bg-[#D7322C] text-[20px] leading-[24px] tracking-[2%] text-white py-[12px] px-[16px] absolute">
        <Image
          src={rectangle}
          width={130}
          height={23}
          alt=""
          className="absolute left-[-18px] top-0 z-[-10]"
        />
        Become a Member Today!{" "}
      </div>
      <div className="bg-[#202020] pt-[40px] mt-[23px] px-[16px]">
        <div className="pt-[16px] flex flex-wrap gap-x-[24px]">
          {/* Our Products */}
          <div className="">
            <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white">
              Our Products
            </h4>
            <div className="mt-[24px] flex flex-col gap-y-[24px]">
              {products?.map((product, index) => (
                <div
                  key={index}
                  className="flex gap-x-[8px] pb-[16px]  pl-[8px] pt-[8px] border-b-[0.5px] border-b-[#A7BAC6]"
                >
                  <GoTriangleRight className="text-[#CFCFCF]" />
                  <span className="text-[#CFCFCF] font-[400] text-[12px] leading-[16.8px] tracking-[2%]">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Resources */}
          <div className="">
            <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white">
              Resources
            </h4>
            <div className="mt-[24px] flex flex-col gap-y-[24px]">
              {resouces?.map((product, index) => (
                <div
                  key={index}
                  className="flex gap-x-[8px] pb-[16px]  pl-[8px] pt-[8px] border-b-[0.5px] border-b-[#A7BAC6]"
                >
                  <GoTriangleRight className="text-[#CFCFCF]" />
                  <span className="text-[#CFCFCF] font-[400] text-[12px] leading-[16.8px] tracking-[2%]">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex max-lg:flex-col  gap-x-[24px]">
            {/* Support */}
            <div className="mt-[24px]">
              <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white">
                Support
              </h4>
              <div className="mt-[24px] flex flex-col gap-y-[24px]">
                {support?.map((product, index) => (
                  <div
                    key={index}
                    className="flex gap-x-[8px] pb-[16px]  pl-[8px] pt-[8px] border-b-[0.5px] border-b-[#A7BAC6]"
                  >
                    <GoTriangleRight className="text-[#CFCFCF]" />
                    <span className="text-[#CFCFCF] font-[400] text-[12px] leading-[16.8px] tracking-[2%]">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* News letter */}
            <div className="flex flex-col mt-[24px] ">
              <h4 className="font-[600] text-[14px] leading-[16.8px] tracking-[2%] text-white">
                Join Our Newsletter
              </h4>
              <form className="mt-[40px]">
                <label className="text-[14px] mb-[8px] font-[400] leading-[16.8px] tracking-[2%] text-[#CFCFCF]">
                  Email
                </label>
                <InputOutline className="w-full" />
                <div className="mt-[32px]">
                  <Button className="h-fit text-[14px] font-[700] leading-[16.8px] text-white px-[20px] py-[8px]">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[16px]">
        {/* Logo */}
        <Image
          src={logo}
          width={81}
          height={109.94}
          alt="logo"
          className=""
        />
        <div className="mt-[24px]">
          <h4 className="text-[20px] font-[600] leading-[24px] tracking-[2%] text-black">
            Seasoned Bankers Group
          </h4>
          <p className="text-[#424242] text-[12px] leading-[14.4px] font-[400] tracking-[2%]">
            CORPORATE MINDS FOR LEADERSHIP AND MENTORSHIP INITIATIVE
          </p>
          {/* Social */}
          <div className="flex mt-[16px] gap-x-[16px]">
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
          <div className="mt-[24px]">
            <h4 className="text-[20px] font-[600] leading-[24px] tracking-[2%] text-black">
              Vision For The Future
            </h4>
            <p className="text-[14px] font-[400] leading-[16.8px] tracking-[2%] text-[#424242]">
              {" "}
              At Seasoned Bankers Group, we aim to empower a community of driven
              bankers poised to make a lasting impact on the future of finance.
            </p>
          </div>
        </div>
        <p className="w-full mt-[24px] text-[14px] font-[300] leading-[16.8px] tracking-[2%] text-black text-center">Copyright (C) 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
