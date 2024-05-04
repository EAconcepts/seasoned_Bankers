"use client";

import Community from "@/app/(components)/community";
import Events from "@/app/(components)/events";
import { Heading } from "@/app/(components)/heading";
import BankIndustry from "@/app/updates/(components)/BankIndustry";
import { useParams } from "next/navigation";
import React from "react";
import Tips from "../(components)/Tips";
import Relationship from "../(components)/Relationship";

const Updates = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <>
        <div className="px-[16px] lg:px-[96px] lg:py-[40px] font-sofiaSans">
          <div className="mt-[40px]">
            <Heading title="Updates From Members" />
          </div>
          {/* Update component */}
          <div className="">
            {id == "1" ? (
              <BankIndustry id={id} />
            ) : id == "2" ? (
              <Tips id={id} />
            ) : (
              id == "3" && <Relationship id={id} />
            )}
          </div>
        </div>
        <Events />
        <Community />
      </>
    </div>
  );
};

export default Updates;
