'use client'

import { Button } from "@/components/ui/button";
import React from "react";
import image1 from "../../public/assets/image1.png";
import image2 from "../../public/assets/image2.png";
import image3 from "../../public/assets/image3.png";
import image4 from "../../public/assets/image4.png";
import image5 from "../../public/assets/image5.png";
import image6 from "../../public/assets/image6.png";
import ImageGrid from "./image-grid";
import { useRouter } from "next/navigation";

const Hero = () => {
  const heroImages = [image1, image2, image3, image4, image5, image6];
  const router = useRouter()
  return (
    <>
      <div className="pt-[40px] lg:mt-[40px] lg:px-[96px] px-[28px] flex max-lg:flex-col font-sofiaSans lg:pb-[80px]">
        <div className="lg:self-center">
          <div className=" lg:text-[24px] text-[16px] lg:leading-[28.8px] leading-[19.2px] tracking-[2%] text-wrap w-full">
            <span className="font-[400]">Level Up Your Career:</span>
            <span className="text-primaryRed font-[700]  text-wrap pl-[2px] ">
              Join Seasoned Bankers Group!
            </span>
          </div>
          <h1 className="mt-[12px] font-[600] lg:text-[40px] text-[32px] text-black lg:leading-[48px] leading-[38.4px] tracking-[2%]">
            Launch Your Career with Confidence: The Right Way to Network 
          </h1>
          <p className="font-[400] lg:text-[24px] lg:leading-[42px] text-[16px] leading-[28px] text-[#424242] mt-[24px]">
            Are you seeking career advancement in the financial world? Connect
            with Banking Experts and Gain valuable insights into the banking
            sector and financial world.
          </p>
          <Button onClick={()=>router.push('/onboarding/signup')} className="font-[700] lg:text-[24px] lg:leading-[28.8px] leading-[19.2px] w-fit mt-[40px]">
            Become A Member Today
          </Button>
        </div>
        {/* Images */}
        <div className="max-lg:hidden ">
          <ImageGrid />
        </div>
        {/* <div className=" gri grid-cols3 grid-image place-items-end gap-x-[12px] gap-y-[16px]">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={300}
            height={400}
            alt="image"
            className={`${
              index == 0
                ? "image1 "
                : index == 1
                ? "image2"
                : index == 2
                ? "image3 "
                : index == 3
                ? "image4"
                : index == 4
                ? "image5 "
                : "image6 "
            } rounded-[45.12px]`}
          />
        ))}
      </div> */}
      </div>
      <div className="lg:hidden mt-[24px]">
        <ImageGrid />
      </div>
    </>
  );
};

export default Hero;
