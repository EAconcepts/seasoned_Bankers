"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { Button, ButtonOutline } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Underline } from "./events";
import { IoCloseCircleOutline, IoCloseOutline } from "react-icons/io5";
const TopNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const pathname = usePathname();
  const navLinks = [
    { link: "Home", path: "/" },
    { link: "About Us", path: "/about" },
    { link: "Membership", path: "/membership" },
    { link: "Resources", path: "/resources" },
    { link: "Events", path: "/events" },
    { link: "Contact Us", path: "/contact" },
  ];
  // navLinks.r
  const router = useRouter();
  return (
    <header className="pl-[20px] lg:px-[120px] pr-[15px] flex w-full justify-between font-sofiaSans">
      <Image
        src={logo}
        height={54}
        width={47}
        alt="logo"
        className="size-auto mt-[10.5px]"
        onClick={() => router.push("/")}
      />
      {/* Links */}
      <nav
        className={`flex  items-center lg:gap-x-[48px] text-[16px] leading-[19.2px] text-[#050505] lg:mt-[18.5px] transition-all duration-500 ${
          showMenu
            ? "fixed flex flex-col items-start z-[999] top-0 right-0 bg-white max-lg:translate-x-0 h-screen w-[204px] px-[16px] gap-y-[8px]"
            : "max-lg:translate-x-[200%] max-lg:z-[999] max-lg:fixed max-lg:flex-col max-lg:items-start top-0 right-0 max-lg:bg-white max-lg:translate- max-lg:h-screen max-lg:w-[204px] max-lg:px-[16px] max-lg:gap-y-[8px] "
        }`}
      >
        {/* Close icon */}
        {/* {showMenu && ( */}
        <>
          <div
            onClick={() => setShowMenu(false)}
            className="absolute left-[-46px] top-[80px]  bg-gradient-to-tr from-primaryRed to-primaryOrange py-[2px] pl-[2px] rounded-tl-[12px] rounded-bl-[12px]"
          >
            <div className="py-[8px] bg-white px-[12px] rounded-tl-[12px] rounded-bl-[12px]">
              <div className="rounded-full  bg-gradient-to-tr from-primaryRed to-primaryOrange p-[1px]">
                <IoCloseOutline className="text-[18px] rounded-full bg-white" />
              </div>
            </div>
          </div>
          <Image
            src={logo}
            width={34.85}
            height={39.99}
            alt="logo"
            className="mb-[24px] self-end mt-[16px] lg:hidden"
          />
        </>
        {/* )} */}
        {navLinks.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            onClick={() => setShowMenu(false)}
            className={`${
              pathname === item.path &&
              "lg:text-[#D7322C] lg:font-[700] lg:text-[18px] leading-[21.6px]"
            }   text-[16px] lg:text-[#050505]  leading-[19.2px] font-[500] text-black max-lg:text-start `}
          >
            {item.link}
            {showMenu && (
              <Underline
                className={`${
                  pathname !== item.path && "h-[0.8px] opacity-30 "
                } h-[1px] mt-[12px]`}
              />
            )}
          </Link>
        ))}
        {showMenu && (
          <div className="mt-[24px] px-[16px] self-start">
            <ButtonOutline
              onClick={() => {
                router.push("/onboarding");
                setShowMenu(false);
              }}
              className="py-[8px] px-[16px] text-[12px] leading-[19.2px] text-black h-fit"
            >
              Become A Member
            </ButtonOutline>
          </div>
        )}
      </nav>
      <div className="p-[22.12px]">
        <FaBars
          onClick={() => setShowMenu((prev) => !prev)}
          className="text-black text-[20px] lg:hidden"
        />
        <div className="max-lg:hidden ">
          <ButtonOutline
            onClick={() => router.push("/onboarding")}
            className="text-[16px] leading-[19.2px] text-black font-[600] h-fit px-[16px] py-[12px]"
          >
            Become a Member
          </ButtonOutline>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
