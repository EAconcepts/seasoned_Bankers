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
    <div className="flex flex-col lg:mt-[40px] lg:pt-[23px] w-full relative">
      {/* Become a member today */}
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
      <div className="bg-[#202020] lg:pt-[49px]  pt-[40px] mt-[23px] lg:px-[96px] px-[16px]">
        <div className=" pb-[40px] lg:flex lg:gap-x-[24px]">
          <div className="pt-[16px] flex max-lg:flex-wrap lg:justify-between gap-x-[24px]">
            {/* Bankers & vision */}
            <div className="flex flex-col lg:mt-[40px] l:px-[96px] max-lg:px-[16px]">
              {/* Logo */}
              <Image
                src={logo}
                width={81}
                height={109.94}
                alt="logo"
                className="lg:hidden "
              />
              <div className="max-lg:mt-[24px] lg:flex lg:justify-between lg:gap-x-[24px] ">
                {/* Logo */}
                <Image
                  src={logo}
                  width={81}
                  height={109.94}
                  alt="logo"
                  className="hidden lg:block lg:w-[109px] lg:h-[184.73px]"
                />
                {/* Seasoned Bankers */}
                <div className="lg:w-full ">
                  <h4 className="text-[20px] lg:text-[32px] lg:leading-[38.4px] font-[600] leading-[24px] tracking-[2%] text-white">
                    Seasoned Bankers Group
                  </h4>
                  <p className="text-[#CFCFCF] lg:mt-[8px] lg:text-[20px] lg:leading-[24px] text-[12px] leading-[14.4px] font-[400] tracking-[2%]">
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
                <div className="max-lg:mt-[24px]  lg:w-full lg:text-start">
                  <h4 className="text-[20px] font-[600] leading-[24px] tracking-[2%] text-white lg:text-[36px] lg:leading-[43.2px]  ">
                    Vision For The Future
                  </h4>
                  <p className="text-[16px] font-[400] lg:text-[24px] lg:leading-[28.8px] leading-[19.2px] tracking-[2%] text-[#CFCFCF] ">
                    {" "}
                    At Seasoned Bankers Group, we aim to empower a community of
                    driven bankers poised to make a lasting impact on the future
                    of finance.
                  </p>
                </div>
                {/* News letter */}
                <div className="lg:w-full flex flex-col  max-lg:mt-[24px] ">
                  <h4 className="font-[600] text-[16px] leading-[19.2px] tracking-[2%] lg:text-[20px] lg:leading-[24px] text-white">
                    Join Our Newsletter
                  </h4>
                  <form className="mt-[40px] lg:w-full  lg:shrink0">
                    <label className="text-[16px] mb-[8px] font-[400] leading-[19.2px] lg:text-[20px] lg:leading-[24px] tracking-[2%] text-[#CFCFCF]">
                      Email
                    </label>
                    <InputOutline className="w-full" />
                    <div className="mt-[32px]">
                      <Button className="h-fit text-[16px] font-[700] leading-[19.2px] lg:text-[20px] lg:leading-[24px] text-white px-[20px] lg:py-[16px] py-[8px]">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className=" flex max-lg:flex-col lg:mt-[40px] lg:justify-betwee lg:w-ful gap-x-[24px] lg:shrink0">
             
            </div> */}
          </div>
        </div>
        <p className="w-full mt-[24px] lg:text-[24px] lg:leading-[28.8px] text-[16px] font-[300] leading-[19.2px] tracking-[2%] text-[#CFCFCF] text-center">
          Copyright (C) 2024 - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
