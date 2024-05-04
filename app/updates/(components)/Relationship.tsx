import Image from "next/image";
import React from "react";
import updateImg from "@/public/assets/updates3.png";
import Pagination from "@/app/resources/(components)/Pagination";

const Relationship = ({id}:{id:string}) => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col gap-y-[24px]">
        <h2 className="lg:text-[36px] text-[28px] leading-[33.6px] font-[600] mt-[40px] lg:leading-[43.2px] tracking-[2%] text-black">
          Building Meaningful Relationships in the Banking Industry
        </h2>
        <small className="lg:text-[24px] text-[18px] leading-[21.6px] font-[400] lg:leading-[28.8px] text-[#424242]">
          Post made by The Seasoned Bankers Group
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
            In a world of digital convenience and self-service options, you
            might think relationships are a relic of the past in banking. But
            here&apos;s the secret: strong relationships are still the
            cornerstone of a thriving financial institution. Here&apos;s why:
          </p>

          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Understanding Your Customer&apos;s Needs:
          </h3>
          <p>
            about helping people achieve their financial goals. By building
            relationships, bankers can gain a deeper understanding of individual
            needs and circumstances. This allows them to tailor financial
            solutions and advice that truly benefit the customer.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Building Trust and Loyalty:
          </h3>
          <p>
            In an industry dealing with sensitive personal information, trust is
            paramount. When customers feel a genuine connection with their
            banker, they&apos;re more likely to be loyal and confident in the
            bank&apos;s recommendations.
          </p>
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Going Beyond Transactions:
          </h3>
          <p>
            Strong relationships allow bankers to become financial partners, not
            just transaction processors. They can proactively offer guidance on
            budgeting, saving, and investing, helping customers navigate
            important financial decisions with confidence.
          </p>
          <h3 className="font-[700] my-[24px] lg:text-[28px] lg:leading-[33.6px] ">
            How to Build Meaningful Relationships:
          </h3>
          <ul className="list-disc pl-[32px]">
            <li>
              Active Listening: Take the time to truly understand your
              customers&apos; goals, concerns, and financial situation.
            </li>
            <li>
              Personalized Communication: Don&apos;t just push products; offer
              solutions that cater to individual needs.
            </li>
            <li>
              Proactive Engagement: Regularly reach out to customers with
              updates, financial tips, or educational resources.
            </li>
            <li>
              Building Rapport: Go beyond the numbers. Find common ground and
              build a genuine connection with your customers.
            </li>
          </ul>
          <h3 className="font-[700] my-[24px] lg:text-[28px] text-[18px] leading-[21.6px] lg:leading-[33.6px] ">
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
          <h3 className="font-[700] my-[24px] text-[18px] leading-[21.6px] lg:text-[28px] lg:leading-[33.6px] ">
            Benefits of Strong Relationships:
          </h3>
          <p>
            Stronger relationships benefit everyone. Customers receive
            personalized financial guidance and build long-term trust with their
            bank. Banks see increased customer satisfaction, loyalty, and
            potentially higher product adoption.
          </p>
          <p>
            In conclusion, building meaningful relationships isn&apos;t just
            good customer service; it&apos;s a strategic advantage in the
            banking industry. By prioritizing connections, banks can empower
            their customers and position themselves for long-term success.
          </p>
        </div>
      </div>
      <Pagination id={id} />
    </div>
  );
};

export default Relationship;
