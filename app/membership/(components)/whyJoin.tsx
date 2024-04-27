import React from "react";

const WhyJoin = () => {
  const whyJoin = [
    {
      title: "Personalized Mentorship:",
      desc: "The personalized mentorship program is the cornerstone benefit. Having a seasoned banker as your mentor provides invaluable career guidance, support, and access to industry insights.",
    },
    {
      title: "Stay Ahead of the Curve:",
      desc: "Gain access to exclusive thought leadership content, research reports, and industry analysis. This keeps you informed about market trends and positions you for success in the evolving financial landscape.",
    },
    {
      title: "Expand Your Network:",
      desc: "Connect with fellow aspiring and seasoned bankers through exclusive networking events, conferences, and online forums. Build valuable relationships within the banking community and gain access to potential career opportunities.",
    },
    {
      title: "Lifelong Learning:",
      desc: "The Seasoned Bankers Group fosters a culture of lifelong learning. Participate in workshops, webinars, and access educational resources to continuously develop your skills and knowledge in the banking sector.",
    },
  ];
  return (
    // <div>
    <ol className="flex max-lg:pt-[24px] lg:mt-[40px] flex-col gap-y-[40px]">
      {whyJoin.map((item, index) => (
        <li key={index} className="">
          <div className="inline tracking-[2%] lg:leading-[28.8px] leading-[19.2px]">
            <h5 className="inline text-[16px] lg:text-[24px] font-[600] ">
              {index + 1}. {item.title}
            </h5>
            <p className="inline pl-[2px] lg:text-[24px] font-[400] text-[16px] ">
              {item.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
    // </div>
  );
};

export default WhyJoin;
