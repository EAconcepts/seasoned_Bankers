"use client";

import React, { ChangeEvent, useContext, useState } from "react";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import { Input, InputOutline } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/(utils)/context";
const SignUpForm = () => {
  const { user } = useContext<any>(AuthContext);
  const [userDetails, setUserDetails] = useState({
    email: user?.email ? user?.email : "",
    password: user?.email ? user?.password : "",
    first_name: "",
    last_name: "",
    phone: "",
    username: "",
    gender: "",
    qualifications: "",
    experiences: "",
    reference: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [errors, setErrors] = useState<boolean>(false);
//   Regist
  const registerMutation = useMutation({
    mutationFn: () => axios.post(`${baseUrl}/register`, userDetails),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.data.data.message)
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  const router = useRouter();
  const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

//   Submit function
  const handleSubmit = () => {
    console.log(userDetails);
    setErrors(false);
    if (specialCharsRegex.test(userDetails.username)) {
      setErrors(true);
      router.push("#error");
    } else {
      registerMutation.mutate();
    }
  };

//   Username special character error
  const showError = (
    <div id="error" className="bg-[#FEF9EC] p-[24px]">
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
          Personal Information
        </h5>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] mt-[8px] text-[14px] leading-[16.8px] tracking-[2%] text-black">
          This information would be used to create your account.
        </p>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] mt-[8px] text-[14px] leading-[16.8px] tracking-[2%] text-black">
          Required fields are marked with an asterisk (*) and must be filled in
          to complete the form
        </p>
      </div>
      {/* Full name */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Full Name{" "}
        </h6>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] lg:mt-[24px] text-[12px] leading-[14.4px] tracking-[2%] text-[#8E98A8] mb-[16px]">
          First name
        </p>
        {/* First name Input Box */}
        <div>
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="first_name"
              onChange={handleChange}
              value={userDetails.first_name}
              type="email"
              required
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] lg:mt-[24px] text-[12px] leading-[14.4px] tracking-[2%] text-[#8E98A8] mb-[16px]">
          Last name
        </p>
        {/*Last name Input Box */}
        <div className=" mt-[24px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="last_name"
              onChange={handleChange}
              value={userDetails.last_name}
              type="email"
              required
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      {/* Username */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Username
        </h6>
        {/* Username Input Box */}
        <div className="mt-[16px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="username"
              onChange={handleChange}
              value={userDetails.username}
              type="text"
              required
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      {/* Phone number */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Phone Number
        </h6>
        {/* Phone number Input Box */}
        <div className="mt-[16px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="phone"
              required
              onChange={handleChange}
              value={userDetails.phone}
              type="text"
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      {/* Gender */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Gender
        </h6>
        {/*Gender Input Box */}
        <div className="mt-[16px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="gender"
              required
              onChange={handleChange}
              value={userDetails.gender}
              type="text"
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      {/* Qualifications */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Qualifications
        </h6>
        {/*Qualification Input Box */}
        <div className="mt-[16px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="qualifications"
              required
              onChange={handleChange}
              value={userDetails.qualifications}
              type="text"
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      {/* Experiences */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Experiences
        </h6>
        {/*Experinces Input Box */}
        <div className="mt-[16px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="experiences"
              required
              onChange={handleChange}
              value={userDetails.experiences}
              type="text"
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      {/* Reference Check */}
      <div className="mt-[24px] lg:mt-[40px]">
        <h6 className=" after:content-['*'] after:text-primaryRed leading-[19.2px] font-[600] lg:text-[36px] lg:leading-[43.2px]">
          Reference Check
        </h6>
        <p className="font-[300] lg:text-[24px] lg:leading-[28.8px] mt-[4px] text-[14px] leading-[16.8px] tracking-[2%] text-black mb-[16px]">
          Click on the box to upload references from colleagues or supervisors,
          to verify your experience(s).
        </p>
        {/*Reference check Input Box */}
        <div className="mt-[16px]">
          <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
            <Input
              name="reference"
              required
              onChange={handleChange}
              value={userDetails.reference}
              type="text"
              className="h-[48px] lg:text-[24px] rounded-[12px] lg:h-[61px] w-full py-[8px] px-[24px] "
            />
          </div>
        </div>
      </div>
      <Button
        disabled={registerMutation.isPending}
        onClick={() => handleSubmit()}
        className="text-[16px] lg:text-[24px] lg:leading-[28.8px] mt-[24px] lg:mt-[40px] font-[700] leading-[19.2px] px-[64px] py-[12px] lg:py-[16px] lg:px-[93px]"
      >
        Submit
      </Button>
    </div>
  );
};

export default SignUpForm;
