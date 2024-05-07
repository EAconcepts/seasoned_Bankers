"use client";

import React from "react";
import { Underline } from "./events";
import Image from "next/image";
import updates1 from "../../public/assets/updates1.png";
import updates2 from "../../public/assets/updates2.png";
import updates3 from "../../public/assets/updates3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

const Updates = () => {
  const updates = [
    {
      id: 1,
      title: "How Technology is Transforming Banking.",
      image: updates1,
      time: "12:00pm GST",
    },
    {
      id: 2,
      title: "Tips from a Seasoned Banker. ",
      image: updates2,
      time: "12:00pm GST",
      by: "Interview with Ayoola",
    },
    {
      id: 3,
      title: "Building Meaningful Relationships in the Banking Industry",
      image: updates3,
      time: "12:00pm GST",
    },
  ];
  const router = useRouter()
  return (
    <div className="bg-[#C22D28] p-[16px]  max-lg:pb-[86px] lg:mt-[40px] lg:px-[96px] lg:py-[40px] font-sofiaSans">
      <h1 className="font-[600] text-[28px] leading-[33.6px] tracking-[2%] text-white">
        Updates from Our Members
      </h1>
      <Underline />
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwipe w-[100%] mt-[40px] pb-[86px]"
      >
        {updates?.map((update, index) => (
          <SwiperSlide key={index} onClick={() => router.push(`/updates/${update.id}`)} className="w-[100%] cursor-pointer">
            <Image
              src={update.image}
              height={302}
              width={384}
              alt=""
              className="max-lg:full h-[302px] lg:h-[302px] lg:rounded-[12px]"
            />
            <div className="px-[12px] mt-[24px]">
              <h4 className="text-white text-[36px] font-[600] tracking-[2%] leading-[43.2px]">
                {update.title}
              </h4>
              <p className="text-[#F5F5F5] font-[400] text-[24px] leading-[28.8px] ">
                {update.by && update.by}
              </p>
              <p className="text-[#F5F5F5] font-[400] text-[24px] leading-[28.8px] ">
                {update.time}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Updates;
