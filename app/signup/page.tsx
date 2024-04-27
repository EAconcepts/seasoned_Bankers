"use client";

import React, { useState } from "react";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import { Input, InputOutline } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SignUp = () => {
  const [errors, setErrors] = useState<boolean>(false);

  const showError = (
    <div className="bg-[#FEF9EC] p-[24px]">
      <p className="text-[#D7322C] text-[20px] leading-[24px] tracking-[2%] font-[400] mb-[24px]">
        Username must not contain any special characters such as “!@#$%^&*;?
      </p>
    </div>
  );
  return (
    <div className="py-[40px] px-[16px] lg:px-[96px] mb-[24px] font-sofiaSans">
      {errors && showError}
      <div className="flex justify-between gap-x-[16px]">
        <h4 className="text-black text-[20px] lg:text-[36px] lg:leading-[43.2px] leading-[24px] tracking-[2%] font-[600]">
          Join Seasoned Bankers Group Today
        </h4>
        <Image
          src={logo}
          width={79.58}
          height={91.32}
          alt="logo"
          className=""
        />
      </div>
      <div className="flex flex-col mt-[24px]">
        <h5 className="text-[20px] lg:text-[36px] font-[600] lg:leading-[43.2px] leading-[24px] tracking-[2%] text-black">
          Create a membership account{" "}
        </h5>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] mt-[8px] text-[14px] leading-[16.8px] tracking-[2%] text-black">
          Required fields are marked with an asterisk (*) and must be filled in
          to complete the form
        </p>
      </div>
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Username{" "}
        </h6>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] lg:mt-[4px] text-[12px] leading-[14.4px] tracking-[2%] text-[#03110E] mb-[16px]">
          (Username must not exceed 10 character and must not contain any
          special character such as @#%)
        </p>
        <div>
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              type="text"
              className="h-[48px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
          {/* Password */}
          <div className="flex flex-col font-[600] mt-[24px] lg:mt-[40px] mb-[16px]">
            <h6 className=" after:content-['*'] after:text-primaryRed text-[16px] leading-[19.2px] lg:text-[36px] lg:leading-[43.2px]">
              Password{" "}
            </h6>
            <p className="font-[300] lg:mt-[4px] lg:text-[24px] lg:leading-[28.8px] leading-[14.4px] tracking-[2%] text-[12px] text-[#03110E]">
              (Password must be between 8 - 20 characters and must contain at
              least one letter and one number)
            </p>
          </div>
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              type="password"
              className="h-[48px] lg:h-[61px] rounded-[12px] w-full py-[8px] px-[24px] "
            />
          </div>
          <Button className="text-[16px] lg:text-[24px] lg:leading-[28.8px] mt-[24px] lg:mt-[40px] font-[700] leading-[19.2px] px-[64px] py-[12px] lg:py-[16px] lg:px-[93px]">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
