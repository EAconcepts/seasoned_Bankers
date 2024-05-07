import React from "react";
import Back from "../(components)/back";
import { Heading } from "../(components)/heading";
import Image from "next/image";
import logo from "../../public/assets/logo2.png";
import Offer from "../(components)/offer";
import offerImg from "../../public/assets/about-offer.png";
import offerImg2 from "../../public/assets/offer1.png";
import WhyJoin from "../membership/(components)/whyJoin";
import Team from "../(components)/team";
import Updates from "../(components)/updates";
import Events from "../(components)/events";
import Community from "../(components)/community";

const About = () => {
  const coreValues = [
    {
      title: "Integrity",
      desc: "We prioritize integrity in all our actions and decisions, upholding honesty, transparency, and ethical conduct at all times.",
    },
    {
      title: "Nuture",
      desc: "We are committed to nurturing relationships, talent, and ideas, fostering growth and development within our community.",
    },
    {
      title: "Service",
      desc: "We are dedicated to providing exceptional service to our members, colleagues, and stakeholders, exceeding expectations and delivering value.",
    },
    {
      title: "Passion",
      desc: "We are driven by passion and enthusiasm for our work, infusing energy and dedication into everything we do.",
    },
    {
      title: "Innovation",
      desc: "We foster a culture of innovation, embracing creativity and forward-thinking to drive continuous improvement and growth.",
    },
    {
      title: "Respect",
      desc: "We show respect for our members, colleagues, and stakeholders, valuing diversity and treating others with dignity and empathy.",
    },
    {
      title: "Excellence:",
      desc: "We pursue excellence in all aspects of our work, striving to deliver high-quality results that exceed expectations.",
    },
  ];
  return (
    <>
      <div className="pt-[40px] px-[16px] lg:px-[96px] font-sofiaSans">
        <Back />
        <div className="pt-[40px]">
          <Heading title="The Seasoned Bankers Group Story" />
          <div className="flex max-lg:flex-col lg:gap-x-[24px] mt-[40px]">
            <div className="max-lg:flex max-lg:gap-x-[24px] lg:shrink-0 items-end">
              <h2 className="lg:hidden font-[600] text-[28px] leading-[33.6px] tracking-[2%]">
                About Us
              </h2>
              <Image
                src={logo}
                height={800}
                width={1000}
                alt=""
                className="lg:w-[384px] lg:h-full w-[179.54px] max-lg:h-[206px] shrink-0"
              />
            </div>  
            <div className="flex flex-col max-lg:mt-[24px] gap-y-[24px]">
              {/* About */}
              <div className="flex flex-col gap-y-[16px]">
                <h2 className="hidden lg:block lg:text-[36px] text-black font-[600] tracking-[2%] lg:leading-[43.2px]">
                  About Us
                </h2>
                <p className="text-[16px] leading-[19.6px] lg:text-[24px] text-[#424242] font-[400] lg:leading-[28.8px] tracking-[2%]">
                  Born from a single tweet in 2021, our association of
                  professional bankers and financial experts has grown into a
                  formidable force in the financial industry. Registered under
                  the CAC, we operate under the umbrella of Corporate Minds for
                  Leadership and Mentorship Initiative. With a dedicated 10-man
                  executive committee at the helm, we take pride in our diverse
                  membership, boasting over 100 active members who are committed
                  to excellence and continual growth in the banking sector.
                </p>
              </div>
              {/* Philosophy */}
              <div className="flex flex-col gap-y-[16px]">
                <h2 className="lg:text-[36px] text-[28px] leading-[33.6px] text-black font-[600] tracking-[2%] lg:leading-[43.2px]">
                  Our Philosophy as a Group
                </h2>
                <p className="lg:text-[24px] text-[16px] text-[#424242] font-[400] leading-[19.6px] lg:leading-[28.8px] tracking-[2%]">
                  At Seasoned Bankers Group, we believe in the power of
                  knowledge sharing, mentorship, and collaboration for
                  professional growth in banking. Our supportive community
                  encourages exchange of insights, guidance, and inspiration
                  among experienced and aspiring bankers. With a focus on
                  lifelong learning and collective expertise, we empower each
                  member to excel in their career and contribute positively to
                  the financial industry&apos;s evolution.
                </p>
              </div>
            </div>
          </div>
          {/* Vision */}
          <div className="lg:mt-[24px] mt-[48px]">
            <h2 className="lg:text-[36px] text-[28px]  text-black font-[600] tracking-[2%] lg:leading-[43.2px]">
              {" "}
              Our Vision for The Future
            </h2>
            <p className="lg:text-[24px] text-[16px] mt-[24px] lg:mt-[40px] text-[#424242] font-[400] leading-[19.6px] lg:leading-[28.8px] tracking-[2%]">
              Our vision for Seasoned Bankers Group is to be the leading hub for
              banking professionals, offering top-notch mentorship, networking,
              and career resources. We plan to go global, setting up chapters in
              major financial hubs worldwide, fostering connections across
              borders. We&apos;ll innovate programs to tackle industry trends,
              keeping our members ahead of the curve. Ultimately, we aim to
              empower a community of driven bankers poised to make a lasting
              impact on the future of finance.
            </p>
          </div>
          {/* Core Values */}
          <div className="flex flex-col gap-y-[16px] lg:gap-y-[40px] lg:mt-[24px] mt-[32px]">
            <h2 className="font-[600] text-[28px] leading-[33.6px] max-lg:mb-[8px] tracking-[2%] text-black ">
              Our Core Values
            </h2>
            {coreValues?.map((value, index) => (
              <div
                key={index}
                className="flex font-[400] lg:text-[24px] text-[16px]  leading-[16.px] lg:leading-[28.8px] tracking-[2%]"
              >
                <span className="font-[700]">{index + 1}.</span>
                <div className="">
                  <span className="font-[700] pl-[3px]"> {value.title}:</span>
                  <span className="pl-[3px]">{value.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <Offer pic={offerImg} pic2={offerImg2} />
      </div>
      {/* Why Join */}
      <div className="lg:pt-[40px] px-[16px] lg:px-[98px]">
        <h2 className="font-[600] mt-[32px] text-[28px] leading-[33.6px] tracking-[2%] text-black lg:text-[36px] lg:leading-[43.2px]">
          Why Join The Seasoned Bankers Group?
        </h2>
        <WhyJoin />
      </div>
      {/* Meet the Team */}
      <div className="mt-[40px]">
        <Team className="bg-white" />
      </div>
      <div className="mt-[40px]">
        <Updates />
      </div>
      <div className="">
        <Events />
      </div>
      <div className="">
        <Community />
      </div>
    </>
  );
};

export default About;
