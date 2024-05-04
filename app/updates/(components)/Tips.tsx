import Image from "next/image";
import React from "react";
import updateImg from "@/public/assets/updates3.png";
import updateImg2 from "@/public/assets/updates2.png";
import Pagination from "@/app/resources/(components)/Pagination";

const Tips = ({id}:{id:string}) => {
  return (
    <div>
        {/* Heading */}
      <div className="flex flex-col gap-y-[24px] lg:mt-[40px]">
        <h2 className="lg:text-[36px] text-[28px] leading-[33.6px] font-[600] mt-[40px] lg:leading-[43.2px] tracking-[2%] text-black">
          Tips from a Seasoned Banker
        </h2>
        <small className="lg:text-[24px] text-[18px] leading-[21.6px] font-[400] lg:leading-[28.8px] text-[#424242]">
          Interview with Ayoola (President SBG)
        </small>
      </div>
      <div className="mt-[24px]">
        <Image
          src={updateImg}
          width={532}
          height={400}
          alt=""
          className="lg:float-start lg:mr-[24px] lg:w-[532px] lg:h-[400px]"
        />
        {/* Content */}
        <div className="lg:text-[24px] text-[16px] leading-[19.6px]  lg:leading-[28.8px] font-[400] tracking-[2%] text-[#424242] max-lg:pt-[24px]">
          <h3 className="font-[700] mb-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer:
          </h3>
          <p>
            TToday, we&apos;`re joined by Mr. Ayoola, a highly respected banker
            with over 25 years of experience in the financial industry and the
            president Seasoned Bankers Group. Mr. Ayoola, thank you for joining
            us!
          </p>

          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p>Thank you for having me. It&apos;s a pleasure to be here</p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer:
          </h3>
          <p>
            Let&apos;s jump right in. What&apos;s the most valuable piece of
            advice you&apos;ve learned throughout your career?
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p>
            For me, it&apos;s all about living within your means. It sounds
            simple, but it&apos;s the foundation for financial stability.
            Understanding your income and expenses allows you to create a budget
            and avoid unnecessary debt
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer
          </h3>
          <p>
            Excellent point. How can someone navigate the complex world of
            saving and investing?
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p>
            Start small and be consistent. Even a small amount saved regularly
            can grow significantly over time. Research different investment
            options based on your risk tolerance and long-term goals. Don&apos;t
            be afraid to seek professional guidance from a financial advisor if
            needed.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer
          </h3>
          <p>What about debt? How can people manage it effectively?</p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p>
            Prioritize high-interest debt like credit cards. There are different
            repayment strategies like the debt snowball or avalanche method.
            Choose one that works for you and stick to it. Remember, eliminating
            debt frees up income for other financial goals.
          </p>

          <Image
            src={updateImg2}
            alt=""
            width={476}
            height={437}
            className=" rounded-[12px] lg:float-right lg:ml-[24px]"
          />
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer
          </h3>
          <p>
            The financial landscape is constantly evolving. How can people stay
            informed?
          </p>

          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p>
            There&apos;s a wealth of resources available. Reputable financial
            websites, podcasts, and books can provide valuable knowledge.
            Don&apos;t be afraid to ask questions at your bank or seek advice
            from a financial professional. But remember, with all this
            information, be critical. Not all financial advice is created equal.
            Do your research and verify the source before making any major
            decisions.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer
          </h3>
          <p>
            What are some of the biggest changes you&apos;ve witnessed in the
            banking industry during your career
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p>
            Technology has been the biggest game-changer. Today, mobile banking
            allows for 24/7 access to manage finances. The rise of online
            platforms and digital wallets has streamlined transactions and
            payments. However, with convenience comes the challenge of
            cybersecurity. Banks are constantly working to improve security
            measures, but it&apos;s also important for individuals to be
            vigilant and protect their personal financial information.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Interviewer
          </h3>
          <p> Any final words of wisdom for our viewers?</p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mr. Ayoola:
          </h3>
          <p className="">
            {" "}
            Be patient and disciplined with your finances. There will be ups and
            downs, but with a sound plan and consistent effort, you can achieve
            your financial goals. The most important thing is to take control of
            your money and make informed decisions.
          </p>
        </div>
      </div>
      <Pagination id={id} />
    </div>
  );
};

export default Tips;
