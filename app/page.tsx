import Image from "next/image";
import Hero from "./(components)/hero";
import Events from "./(components)/events";
import Membership from "./(components)/membership";
import Offer from "./(components)/offer";
import Updates from "./(components)/updates";
import Team from "./(components)/team";
import Follow from "./(components)/follow";
import Footer from "./(components)/footer";
import Instagram from "./(components)/instagram";

export default function Home() {
  return (
    <main className="flex flex-col w-full font-sofiaSans">
      <Hero />
      <div className="max-lg:mt-[24px]">
        <Events />
      </div>
      <Membership />
      <Offer />
      <Updates />
      <Team />
      {/* <Follow /> */}
    </main>
  );
}
