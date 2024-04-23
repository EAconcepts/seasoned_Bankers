"use client"

import React from "react";
import { Underline } from "./events";
import Image from "next/image";
import updates from "../../public/assets/updates.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Updates = () => {
  return (
    <div className='bg-[#C22D28] p-[16px] font-sofiaSans'>
      <h1 className="font-[600] text-[28px] leading-[33.6px] tracking-[2%] text-white">Updates from Our Members</h1>
      <Underline />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwipe w-[100%] mt-[40px] pb-[86px]"
      >
        <SwiperSlide className="w-[100%]">
          <Image src={updates} height={302} width={328} alt="" className="w-full" />
          <div className='px-[12px] mt-[24px]'>
            <h4 className='text-white text-[36px] font-[600] tracking-[2%] leading-[43.2px]'>How Technology is Transforming Banking.</h4>
            <p className="text-[#F5F5F5] font-[400] text-[24px] leading-[28.8px] ">12:00pm GST</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <Image src={updates} height={302} width={328} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Updates;
