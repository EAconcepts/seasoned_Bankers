"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Back from "../../(components)/back";
import Image from "next/image";
import bgImage from "../../../public/assets/success-bg.png";
import { Input, InputOutline } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";

const Success = () => {
  return (
    <div className="px-[16px] py-[24px] max-lg:mb-[24px] lg:px-[0px] font-sofiaSans">
      <div className="lg:px-[96px]">
        <Back />
      </div>
      <div className="mt-[24px] pt-[8px] lg:relative lg:px-[96px]">
        <Image
          src={bgImage}
          className="w-[328px] lg:h-full h-[220px] rounded-[12px]  lg:hidde  lg:w-full"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="flex flex-col gap-y-[16px] mt-[24px]">
          <h3 className="lg:text-[36px] lg:leading-[43.2px] font-[600]">
            Thanks for Your Interest in the Seasoned Bankers Group!
          </h3>
          <p className="lg:text-[24px] lg:leading-[28.8px] tracking-[2%] text-[#424242] font-[400]">
            We appreciate you taking the time to apply for membership in the
            Seasoned Bankers Group. Your application has been successfully
            received and is currently under review by our admissions committee.
          </p>
        </div>
        <div className="mt-[24px]">
          <h3 className="font-[600] lg:text-[36px] lg:leading-[43.2px] tracking-[2%] text-black">
            What to Expect Next:
          </h3>
          <ul className="list-disc pl-[24px] mt-[40px] flex flex-col lg:gap-y-[40px] lg:text-[24px] lg:leading-[28.8px] tracking-[2%] text-[#424242]">
            <li className="">
              We will carefully evaluate your qualifications and experience to
              ensure a good fit for our community.
            </li>
            <li className="">
              You can expect to receive an email from us soon regarding your
              application status.
            </li>
            <li className="">
              This email will either be an invitation to join the Seasoned
              Bankers Group or a notification if further information is
              required.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Success;
