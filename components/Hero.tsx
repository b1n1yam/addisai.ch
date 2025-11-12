import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import { BorderTrail } from "./motion-primitives/border-trail";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const logos = [
    "https://framerusercontent.com/images/aSbGmr7kktC3aODWfDtv76JALA.svg",
    "https://framerusercontent.com/images/1fjZ7ekNdYlK0tFhnKDtHB0dmTw.svg",
    "https://framerusercontent.com/images/QjFuvzys5n1siTa8Kjm9HNa38Q.svg",
    "https://framerusercontent.com/images/a2nzgda9BTGjYLvuLkFwY8Z4Dw.svg",
    "https://framerusercontent.com/images/ZKOwx6WzrSjr1AC2T3Bn386pwvs.svg",
  ];
  const imageStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <Wrapper>
      {/* Left SVG with gradient fade to left */}

      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh] opacity-[6%]" />

      <Container>
        <div className="flex flex-col items-center justify-center py-14 h-full">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <BorderTrail
              size={100}
              trailLength={60}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            />

            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
              Introducing Translation API
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>

          <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
            <h1 className="text-4xl md:text-5xl lg:text-5xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
              Create exceptional experiences with AI-Powered support
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Keep your team in sync with a shared inbox, advanced ticketing,
              automation, and built in AI
            </p>
            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
              <Link
                href="#"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
              >
                <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                  ✨ {"  "}Start delivering exceptional experiences today
                </p>
                <Button
                  size="sm"
                  className="rounded-full hidden lg:flex border border-foreground/20"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      {/* Logo Scrolling Section with Decorative Lines */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-center">
          {/* Left decorative lines */}
          <div className="hidden lg:block relative h-20 mt-4 opacity-25">
            {/* Horizontal line */}
            <div className="absolute -left-0 top-1/12 w-32 xl:w-48 h-[1px] overflow-hidden -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-l from-gray-200/50 via-gray-200/50 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Diagonal line */}
            <div className="absolute ml-[11.4rem] top-[2.2rem] w-25 h-[1px] rotate-[35deg] overflow-hidden -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 via-gray-200/50 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>

          <div className="relative w-full items-center justify-center flex">
            {/* Portal window with mask gradient for seamless fade */}
            <div className="relative overflow-hidden  max-w-2xl [mask-image:linear-gradient(to_right,transparent,black_60%,black_80%,transparent)]">
              {/* Scrolling animation */}
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-12 md:gap-16 lg:gap-20 items-center whitespace-nowrap"
              >
                {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="Brand logo"
                    className="h-6 md:h-7 opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right decorative lines */}
          <div className="hidden lg:block relative h-20 mt-4 opacity-25">
            {/* Horizontal line */}
            <div className="absolute -right-0 top-1/12 w-32 xl:w-48 h-[1px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 via-gray-200/50 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
              </div>
            </div>
            {/* Diagonal line */}
            <div className="absolute right-[10.85rem] top-[4rem] w-25 h-[1px] origin-left -rotate-[35deg] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/50 to-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-gray-100 animate-[shimmer_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center py-10   w-full">
        <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
        <div className="-m-2 rounded-xl p-6 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
          <div className=" bg-black min-h-130 items-center rounded-2xl">
            <img
              src="/hero1.png"
              alt="banner image"
              className="rounded-md lg:rounded-xl  px-8 py-16 "
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
