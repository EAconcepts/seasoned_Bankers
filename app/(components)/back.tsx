import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Back = () => {
  return (
    <Link
      href={"/"}
      className="w-full border-b-[0.5px] border-b-[#8E98A8] py-[12px] "
    >
      <div className="flex gap-x-[16px] items-center">
        <IoIosArrowRoundBack className="text-[#424242] text-[26px] lg:text-[32px]" />
        <span className="text-[#424242] lg:text-[24px] lg:leading-[28.8px] font-[400] text-[16px] leading-[19.2px] tracking-[2%]">
          Back to Home
        </span>
      </div>
    </Link>
  );
};

export default Back;
