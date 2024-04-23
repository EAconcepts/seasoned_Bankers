import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { ButtonOutline } from "@/components/ui/button";
const TopNav = () => {
  const navLinks = [
    { link: "Home", path: "/" },
    { link: "About Us", path: "/" },
    { link: "Membership", path: "/" },
    { link: "Resources", path: "/" },
    { link: "Events", path: "/" },
    { link: "Contact Us", path: "/" },
  ];
  return (
    <header className="pl-[20px] lg:px-[120px] pr-[15px] flex w-full justify-between">
      <Image
        src={logo}
        height={54}
        width={47}
        alt="logo"
        className="size-auto"
      />
      <nav className="flex items-center max-lg:hidden gap-x-[48px] text-[16px] leading-[19.2px] text-[#050505] mt-[18.5px] ">
        {navLinks.map((item, index) => (
          <Link href={item.link} key={index}>
            {item.link}
          </Link>
        ))}
      </nav>
      <div className="p-[22.12px]">
        <FaBars className="text-black text-[18px] lg:hidden" />
        <div className="max-lg:hidden "> 
        <ButtonOutline className="text-[14px] leading-[16.8px] text-black font-[600] h-fit px-[16px] py-[12px]">Become a Member</ButtonOutline>

        </div>
      </div>
    </header>
  );
};

export default TopNav;
