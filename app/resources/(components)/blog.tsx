import { Heading } from "@/app/(components)/heading";
import React from "react";
import blog1 from "../../../public/assets/blog-1.png";
import blog2 from "../../../public/assets/blog2.png";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "./Pagination";

const Blog = () => {
  const blog = [
    {
      title: "Benefits of Corporate Membership for Financial Institutions",
      content:
        "A comprehensive corporate membership program designed to empower your financial institution by investing in your employees' professional development and career growth...",
      date: "Jan 2, 2024",
      image: blog1,
    },
    {
      title: "Finance: Doing It The Right Way",
      content:
        "A comprehensive corporate membership program designed to empower your financial institution by investing in your employees' professional development and career growth...",
      date: "Jan 2, 2024",
      image: blog2,
    },
    {
      title: "Benefits of Corporate Membership for Financial Institutions",
      content:
        "A comprehensive corporate membership program designed to empower your financial institution by investing in your employees' professional development and career growth...",
      date: "Jan 2, 2024",
      image: blog1,
    },
  ];
  return (
    <div className="w-full font-sofiaSans">
      <div className="w-full">
        {/* Blog */}
        <div className="mt-[40px]">
          <Image
            src={blog1}
            width={600}
            height={400}
            alt=""
            className="lg:float-left lg:mr-[24px] max-lg:w-full max-lg:h-[218px] rounded-[12px]"
          />
          {/* Blog content */}
          <div className="max-lg:mt-[24px]">
            <h2 className="lg:text-[36px] lg:leading-[43.2px] font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              Why Your Financial Institution Needs a Corporate Membership
            </h2>
            <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
              The financial services landscape is constantly evolving. New
              technologies, regulations, and competitor strategies emerge at a
              dizzying pace. To stay ahead of the curve and ensure continued
              success, financial institutions need access to the latest trends,
              industry best practices, and valuable connections.
            </p>
            <div>
              <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
                {" "}
                The financial services landscape is constantly evolving. New
                technologies, regulations, and competitor strategies emerge at a
                dizzying pace. To stay ahead of the curve and ensure continued
                success, financial institutions need access to the latest
                trends, industry best practices, and valuable connections.
              </p>
              <h3 className="lg:text-[28px] mt-[24px] lg:leading-[33.6px] font-[700] text-[18px] leading-[21.6px] tracking-[2%] text-black">
                Building Bridges and Networks:
              </h3>{" "}
              <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
                One of the most significant advantages of membership is the
                opportunity to network and collaborate with industry leaders and
                decision-makers from other financial institutions. These
                connections foster knowledge sharing, brainstorming sessions,
                and even potential partnerships. Attending industry conferences,
                workshops, and webinars allows you to tap into a wealth of
                insights on the latest trends and innovations. This exchange of
                ideas helps your institution stay informed and adapt its
                strategies to remain competitive.
              </p>
              <h3 className="lg:text-[28px] mt-[24px] lg:leading-[33.6px] font-[700] text-[18px] leading-[21.6px] tracking-[2%] text-black">
                Shaping the Landscape and Staying Compliant:{" "}
              </h3>
              <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
                Beyond sharing knowledge, industry groups often have a strong
                lobbying presence. They can influence government policies and
                regulations that directly impact your business. By joining
                forces with other institutions, your voice gains strength,
                ensuring policies are shaped in a way that benefits the industry
                as a whole. Additionally, these organizations often provide
                resources and guidance to help members navigate the
                ever-changing regulatory environment. This can save your
                institution significant time and resources when it comes to
                compliance efforts.
              </p>
            </div>
            <Image
              src={blog1}
              width={600}
              height={400}
              alt=""
              className="lg:float-right mt-[24px] lg:mr-[24px] max-lg:w-full max-lg:h-[218px] rounded-[12px]"
            />
            <h3 className="mt-[24px] lg:text-[36px] lg:leading-[43.2px] font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              Investing in Your Team and Public Image:
            </h3>
            <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
              Developing a skilled and adaptable workforce is crucial for any
              financial institution. Corporate memberships often offer access to
              exclusive training programs and educational resources. These
              resources cater to specific areas within the financial industry,
              allowing your employees to stay upskilled and competitive.
              Discounted certifications and conferences further enhance their
              professional development, making your institution a more
              attractive employer. Moreover, being associated with a
              well-respected industry organization can significantly enhance
              your institution&apos;s public image. This builds trust and
              credibility with potential customers, ultimately leading to
              business growth.
            </p>
            <h3 className="mt-[24px] lg:text-[36px] lg:leading-[43.2px] font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              Unlocking Growth Potential:
            </h3>
            <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
              The benefits go beyond knowledge sharing and compliance. Industry
              memberships can be a breeding ground for business development and
              growth. Networking events and access to industry reports can help
              your institution discover new business opportunities, identify
              potential acquisitions, and tap into new markets. Some memberships
              even offer access to directories of potential clients, allowing
              you to target specific segments effectively. Additionally,
              negotiated discounts with vendors for commonly used services can
              translate to significant cost savings.
            </p>
            <h3 className="mt-[24px] lg:text-[36px] lg:leading-[43.2px] font-[600] text-[24px] leading-[28.8px] tracking-[2%] text-black">
              The Takeaway
            </h3>
            <p className="lg:text-[24px] mt-[24px] text-[16px] leading-[19.2px] lg:leading-[28.8px] font-[400] text-[#424242]">
              In conclusion, a corporate membership in a relevant industry
              organization is a strategic investment for any financial
              institution. The benefits extend far beyond simple networking.
              From staying informed and compliant to attracting top talent and
              fostering business growth, the advantages are substantial. When
              considering membership, carefully evaluate the specific offerings
              of each organization and how they align with your
              institution&apos;s goals. By making this strategic move, you can
              ensure your financial institution thrives in the ever-evolving
              landscape of finance.
            </p>
          </div>
        </div>
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default Blog;
