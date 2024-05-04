import Image from "next/image";
import React from "react";
import updateImg from "@/public/assets/updates1.png";
import Pagination from "@/app/resources/(components)/Pagination";

const BankIndustry = ({id}:{id:string}) => {
  console.log(id)
  return (
    <div>
      <div className="flex flex-col gap-y-[24px]">
        <h2 className="lg:text-[36px] text-[28px] leading-[33.6px] font-[600] mt-[40px] lg:leading-[43.2px] tracking-[2%] text-black">
          How Technology is Transforming Banking Industry
        </h2>
        <small className="lg:text-[24px] text-[18px] leading-[21.6px] font-[400] lg:leading-[28.8px] text-[#424242]">
          Post made by Dubem (People & culture SBG)
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
          <p>
            The financial services landscape is constantly evolving. The days of
            waiting in long lines and filling out endless paperwork at the bank
            are fading fast. Technology is revolutionizing the financial sector,
            offering a more convenient, secure, and personalized banking
            experience. Let&apos;s dive into how:
          </p>

          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Mobile Banking On-the-Go:{" "}
          </h3>
          <p>
            Gone are the branch-bound limitations. Mobile banking apps allow you
            to check balances, transfer funds, pay bills, and even deposit
            checks – all from your smartphone. This 24/7 access empowers you to
            manage your finances anytime, anywhere.{" "}
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Frictionless Payments:
          </h3>
          <p>
            Forget fumbling for cash or swiping cards. Contactless payments and
            digital wallets allow for secure and speedy transactions with a tap
            or a scan. This innovation not only streamlines your shopping
            experience but also enhances security by reducing reliance on
            physical cards.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            AI-Powered Insights:{" "}
          </h3>
          <p>
            Artificial intelligence (AI) is transforming banking by providing
            personalized financial insights. AI analyzes your spending habits
            and suggests budgeting strategies or identifies potential savings
            opportunities. These data-driven recommendations can help you make
            informed financial decisions
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Enhanced Security
          </h3>
          <p>
            Security remains a top priority in the digital age. Banks are
            leveraging advanced encryption methods and fraud detection
            algorithms to protect your financial information. Additionally,
            biometric authentication like fingerprint scanning adds another
            layer of security for accessing your accounts.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            The Rise of Fintech:
          </h3>
          <p>
            Fintech startups are disrupting the traditional banking landscape by
            offering innovative financial solutions. From peer-to-peer lending
            platforms to robo-advisors, these companies provide greater access
            to financial services and potentially lower fees.
          </p>
          <p>
            As technology continues to evolve, so too will the banking industry.
            We can expect even more seamless integration of artificial
            intelligence, blockchain technology, and automation. Ultimately,
            these advancements aim to create a more personalized, efficient, and
            secure banking experience for everyone.
          </p>
        </div>
      </div>
      <Pagination id={id} />
    </div>
  );
};

export default BankIndustry;
