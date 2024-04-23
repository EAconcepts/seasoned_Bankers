import Image from "next/image";
import Hero from "./(components)/hero";
import Events from "./(components)/events";
import Membership from "./(components)/membership";
import Offer from "./(components)/offer";
import Updates from "./(components)/updates";
import Team from "./(components)/team";
import Follow from "./(components)/follow";
import Footer from "./(components)/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full font-sofiaSans">
      <Hero />
      <Events />
      <Membership />
      <Offer />
      <Updates />
      <Team/>
      <Follow/>
      <Footer/>
    </main>
  );
}
