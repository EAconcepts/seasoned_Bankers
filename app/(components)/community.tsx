import React from "react";
import { Underline } from "./events";
import Image from "next/image";
import community1 from "../../public/assets/community1.png";
import community2 from "../../public/assets/community2.png";
import community3 from "../../public/assets/community3.png";
import community4 from "../../public/assets/community4.png";
import community5 from "../../public/assets/community5.png";
import community6 from "../../public/assets/community6.png";
import community7 from "../../public/assets/community7.png";
import community8 from "../../public/assets/community8.png";
import community9 from "../../public/assets/community9.png";
import community10 from "../../public/assets/community10.png";
import community11 from "../../public/assets/community11.png";
import community12 from "../../public/assets/community12.png";
import community13 from "../../public/assets/community13.png";
import community14 from "../../public/assets/community14.png";
import community15 from "../../public/assets/community15.png";

const Community = () => {
  const commImages = [
    community1,
    community2,
    community3,
    community4,
    community5,
    community6,
    community7,
    community8,
    community9,
    community10,
    community11,
    community12,
    community13,
    community14,
    community15,
  ];
  return (
    <div className="bg-[#F7E7CE] py-[40px] px-[16px]">
      <h2 className="font-[600] text-[28px] leading-[33.6px] tracking-[2%] text-black">
        Connect with our community
      </h2>
      <Underline />
      <div className="grid grid-cols-5 mt-[40px]">
        {commImages?.map((pic, index) => (
          <Image
            key={index}
            src={pic}
            width="65.5"
            height="65.5"
            alt=""
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
