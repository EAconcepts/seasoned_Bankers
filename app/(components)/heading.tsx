import { twMerge } from "tailwind-merge";
import { Underline } from "./events";

export const Heading = ({ className, title }: { className?: string, title: string }) => {
  return (
    <div className="">
      <h2
        className={twMerge(
          "text-[28px] leading-[33.6px] font-[600] text-black ",
          className
        )}
      >
        {title}
      </h2>
      <Underline />
    </div>
  );
};
