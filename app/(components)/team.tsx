import React from "react";
import { Underline } from "./events";
import team1 from "../../public/assets/team1.png";
import team2 from "../../public/assets/team2.png";
import team3 from "../../public/assets/team3.png";
import team4 from "../../public/assets/team4.png";
import team5 from "../../public/assets/team5.png";
import team6 from "../../public/assets/team6.png";
import Image from "next/image";
import { ButtonOutline } from "@/components/ui/button";

const Team = () => {
  const theTeam = [
    {
      name: "Ayoola",
      role: "President",
      image: team1,
    },
    {
      name: "Machukker",
      role: "Vice President",
      image: team2,
    },
    {
      name: "Rebecca",
      role: "Treasurer",
      image: team3,
    },
    {
      name: "Ann",
      role: "Admin & Data",
      image: team4,
    },
    {
      name: "Ayoola",
      role: "Membership & Outreach",
      image: team5,
    },
    {
      name: "Adesuwa",
      role: "Communication & PR",
      image: team6,
    },
  ];
  return (
    <div className="w-full py-[40px] px-[16px] bg-[#F7EAD6] lg:px-[96px]">
      <h1 className="font-[600] text-[28px] lg:text-[36px] lg:leading-[43.2px] leading-[33.6px] tracking-[2%] text-black">
        Meet The Team
      </h1>
      <Underline />
      {/* The Team */}
      <div className="w-full grid lg:grid-cols-5 grid-cols-3 gap-[0px] mt-[40px] mb-[24px]">
        {theTeam?.map((team, index) => (
          <div key={index} className="relative border-none w-full">
            <Image
              src={team.image}
              className="size-full "
              width={109.33}
              height={109.33}
              alt=""
            />
            <div className="absolute bottom-0 w-full px-[8px] bg-black/25 backdrop-blur-md shadow-[#42424240]">
              <div className="w-full flex flex-col items-end">
                <h3 className="text-[14px] lg:text-[24px] lg:leading-[28.8px] font-[600] leading-[16.8px] tracking-[2%] text-white">
                  {team.name}
                </h3>
                <p className="text-white italic text-[10px] leading-[12px] lg:text-[16px] lg:leading-[19.2px] tracking-[2%] font-[400]">
                  {team.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonOutline className="font-[700] lg:hidden bg-[#F7EAD6] text-[14px] leading-[16.8px] text-black h-fit py-[8px] px-[12px] -[24px] w-fit">
        See All Members
      </ButtonOutline>
    </div>
  );
};

export default Team;
