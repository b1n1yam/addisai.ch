import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import { perks } from "@/constants";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center -mt-48 relative ">
      {/* Black overlay mask at the top */}
      <div className=" w-full    -mt-30 left-0 right-0 h-[350px] bg-linear-to-b from-transparent via-black/90 to-black pointer-events-none  " />

      <Container className=" z-20  bg-black -mt-32">
        <div className="flex flex-col items-center justify-center    w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900 px-28 2xl:px-36">
            {perks?.map((perk) => (
              <div
                className="flex flex-col items-start px-4 md:px-6 lg:px-8 py-4 lg:py-8"
                key={perk.title}
              >
                <div className="flex items-center justify-center">
                  <perk.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {perk.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="w-full h-[100px]    bg-linear-to-b from-black via-black/60 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default HowItWorks;
