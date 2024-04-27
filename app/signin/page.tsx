import React from "react";
import Back from "../(components)/back";
import Image from "next/image";
import bgImage from "../../public/assets/login.png";
import { Input, InputOutline } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signin = () => {
  return (
    <div className="px-[16px] py-[24px] max-lg:mb-[24px] lg:px-[0px] font-sofiaSans">
      <div className="lg:px-[96px]">
        <Back />
      </div>
      <div className="mt-[24px] pt-[8px] lg:relative">
        <Image
          src={bgImage}
          className="w-[328px] lg:h-full h-[220px] rounded-[12px]  lg:hidde  lg:w-full"
          width={1000}
          height={1000}
          alt=""
        />
        <form className=" lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:w-[668px] lg:bg-white/90 lg:top-[80px] lg:rounded-[12px] lg:p-[40px] lg:z-[999] flex flex-col mt-[8px] pt-[24px]">
          <div className="flex flex-col px-[16px] ">
            <div className="flex flex-col gap-y-[16px] lg:gap-y-[40px]">
              <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
                <Input
                  className=" lg:h-[78px] pl-[24px] rounded-[12px] lg:text-[32px] text-[14px] font-[400] leading-[16.8px] tracking-[2%] lg:leading-[38.4px] text-[#66757F]"
                  placeholder="Username"
                />
              </div>
              <div className="bg-gradient-to-tr from-primaryRed to-primaryOrange rounded-[12px] p-[1px]">
                <Input
                  className=" pl-[24px] rounded-[12px] text-[14px] font-[400] lg:h-[78px] lg:leading-[38.4px] lg:text-[32px] leading-[16.8px] tracking-[2%] text-[#66757F]"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="mt-[40px]">
              <Button className="text-[16px] w-full lg:text-[36px] lg:leading-[43.2px] lg:py-[20px] leading-[19.2px] tracking-[2%] font-[700]">
                Login
              </Button>
              <p className="mt-[12px] p-[8px] lg:text-[24px] lg:mt-[36px] text-primaryRed font-[400] leading-[16.8px] text-[14px]">
                Forget your password?
              </p>
            </div>
            <div className=" text-[16px] lg:mt-[40px] font-[400] leading-[19.2px] lg:gap-y-[16px] lg:flex-col tracking-[2%] mt-[40px] flex gap-x-[8px]">
              <span className="text-black lg:text-[32px] lg:leading-[38.4px]">
                Are you new here?
              </span>
              <Link
                href={"/signup"}
                className="text-[14px] text-primaryRed lg:text-[24px] "
              >
                Join as a member
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
