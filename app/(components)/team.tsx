import React from "react";
import { Underline } from "./events";
import team1 from "../../public/assets/team1.png";
import team2 from "../../public/assets/team2.png";
import team3 from "../../public/assets/team3.png";
import team4 from "../../public/assets/team4.png";
import team5 from "../../public/assets/team5.png";
import team6 from "../../public/assets/team6.png";
import team7 from "../../public/assets/team7.png";
import team8 from "../../public/assets/team8.png";
import team9 from "../../public/assets/team9.png";
import team10 from "../../public/assets/team10.png";
import Image from "next/image";
import { ButtonOutline } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

const Team = ({ className }: { className?: string }) => {
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
    {
      name: "Anthony",
      role: "Diaspora Coordinator",
      image: team7,
    },
    {
      name: "Nonso",
      role: "Research & Insight",
      image: team8,
    },
    {
      name: "Dubem",
      role: "People & Culture",
      image: team9,
    },
    {
      name: "David",
      role: "People & Culture",
      image: team10,
    },
  ];
  return (
    <div
      className={twMerge(
        "w-full py-[40px] px-[16px] bg-[#FEF9EC] lg:px-[96px]",
        className
      )}
    >
      <h1 className="font-[600] text-[28px] lg:text-[36px] lg:leading-[43.2px] leading-[33.6px] tracking-[2%] text-black">
        Meet Our Team
      </h1>
      <Underline />
      {/* The Team */}
      <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-y-[24px] lg:gap-y-[64px] gap-[0px] mt-[40px] mb-[24px]">
        {theTeam?.map((team, index) => (
          <div
            key={index}
            className={`${
              index > 5 && "max-lg:hidden"
            } flex flex-col items-center relative border-none w-full`}
          >
            <Image
              src={team.image}
              className="size-[120px] rounded-full "
              width={120}
              height={120}
              alt=""
            />
            <div className=" w-full px-[8px] mt-[20px]">
              <div className="w-full flex flex-col items-center">
                <h3 className="text-[16px] lg:text-[24px] lg:leading-[28.8px] font-[600] leading-[19.2px] tracking-[2%] text-black">
                  {team.name}
                </h3>
                <p className="text-[#D7322C] italic text-[10px] leading-[12px] lg:text-[16px] lg:leading-[19.2px] tracking-[2%] font-[400]">
                  {team.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
