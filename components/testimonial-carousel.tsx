import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Wrapper from "./global/wrapper";

const testimonials = [
  {
    id: 1,
    text: "From the start, they made an effort to really understand our business and audience. The strategy they built felt tailor-made, and the campaigns brought in great results. We saw a clear spike in sales and even formed a new, strategic collaboration thanks to their efforts.",
    author: "David Anderson",
    company: "ADOBE Software",
    position: "CEO",
  },
  {
    id: 2,
    text: "They truly grasped the essence of our brand and developed a marketing plan that was spot on. Their identity perfectly captured our innovative vision, and the creative approach to sales helped us secure a key partnership with a major company.",
    author: "Ethan Miller",
    company: "Addis AI",
    position: "Marketing Director",
  },
  {
    id: 3,
    text: "They took the initiative to understand our brand trying to reach our target audience needs. Once they had developed a strong strategy that captured our brand's creative approach, it significantly helped, and their expertise was instrumental in helping us to form strategic ties. It jumped to secure a valued partnership.",
    author: "Andrew Wilson",
    company: "ADANN",
    position: "CTO",
  },
  {
    id: 4,
    text: "The level of professionalism and attention to detail was exceptional. They didn't just deliver a service—they became true partners in our growth journey. The results exceeded our expectations.",
    author: "Sarah Chen",
    company: "TechFlow Inc",
    position: "Head of Growth",
  },
  {
    id: 5,
    text: "Working with them transformed our entire marketing approach. Their strategic insights and creative execution helped us reach new markets we never thought possible. Truly game-changing.",
    author: "Michael Roberts",
    company: "Innovate Labs",
    position: "Founder & CEO",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);

    if (absDiff > 2) return { display: "none" };

    // Playing card fan effect
    const rotateZ = diff * 12;
    const rotateY = diff * 10;

    const translateX = diff * 150;
    const translateY = Math.abs(diff) * 25;
    const translateZ = absDiff === 0 ? 0 : -120 * absDiff;

    const scale = absDiff === 0 ? 1 : 0.9;
    const opacity = 1; // All cards fully visible
    const zIndex = 10 - absDiff;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      opacity,
      zIndex,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="w-full z-10">
      <div className=" flex w-full h-[150px]   bg-linear-to-b from-transparent via-black/90 to-black pointer-events-none  " />

      <div className=" min-w-full  bg-black z-40 ">
        <div className="w-full min-h-screen flex items-center justify-center  ">
          <div className="w-full max-w-7xl mx-auto -mt-32">
            <div>
              {/* 3D Carousel Container */}
              <div
                ref={carouselRef}
                className="relative h-[600px] flex items-center justify-center"
                style={{
                  perspective: "1500px",
                  perspectiveOrigin: "center center",
                }}
              >
                {testimonials.map((testimonial, index) => {
                  const style = getCardStyle(index);
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={testimonial.id}
                      className="absolute w-[340px] max-w-[85vw] cursor-pointer"
                      style={style}
                      onClick={() => {
                        if (!isAnimating && index !== activeIndex) {
                          setIsAnimating(true);
                          setActiveIndex(index);
                          setTimeout(() => setIsAnimating(false), 600);
                        }
                      }}
                    >
                      <div
                        className={`
                  relative p-8 rounded-2xl
                  min-h-[420px] flex flex-col justify-between
                  bg-black/40 backdrop-blur-sm
                  ${
                    isActive
                      ? "border border-blue-500/50 shadow-lg shadow-blue-500/20"
                      : "border border-white/30"
                  }
                  transition-all duration-600
                `}
                      >
                        {/* Quote Icon */}
                        <div
                          className={`
                    absolute -top-4 left-8 w-8 h-8 rounded-full 
                    ${
                      isActive
                        ? "bg-blue-500"
                        : "bg-white/5 border border-white/10"
                    }
                    flex items-center justify-center
                    transition-all duration-600
                  `}
                        >
                          <Quote
                            className={`w-4 h-4 ${
                              isActive ? "text-white" : "text-white/40"
                            }`}
                          />
                        </div>

                        {/* Testimonial Text */}
                        <p
                          className={`
                    text-sm md:text-base leading-relaxed relative z-10 mb-6
                    ${isActive ? "text-white" : "text-white/70"}
                    transition-colors duration-600
                  `}
                        >
                          {testimonial.text}
                        </p>

                        {/* Author Info */}
                        <div className="relative z-10">
                          <h4
                            className={`
                        text-base font-semibold mb-1
                        ${isActive ? "text-white" : "text-white/80"}
                        transition-colors duration-600
                      `}
                          >
                            {testimonial.author}
                          </h4>
                          <p
                            className={`
                        text-xs
                        ${isActive ? "text-blue-400" : "text-white/50"}
                        transition-colors duration-600
                      `}
                          >
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-6 ">
                <button
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
                </button>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setActiveIndex(index);
                          setTimeout(() => setIsAnimating(false), 700);
                        }
                      }}
                      className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? "w-8 bg-blue-500"
                      : "w-1.5 bg-white/20 hover:bg-white/30"
                  }
                `}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
