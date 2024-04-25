import { IoIosArrowRoundBack } from "react-icons/io";

const Back = () => {
  return (
    <div className="w-full border-b-[0.5px] border-b-[#8E98A8] py-[12px] ">
      <div className="flex gap-x-[16px] items-center">
        <IoIosArrowRoundBack className="text-[#424242] text-[26px]" />
        <span className="text-[#424242] font-[400] text-[14px] leading-[16.8px] tracking-[2%]">
          Back to Home
        </span>
      </div>
    </div>
  );
};

export default Back;
