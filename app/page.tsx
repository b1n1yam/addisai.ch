"use client";
import Features from "@/components/features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/howitworks";
import TestimonialCarousel from "@/components/testimonial-carousel";
import Testimonials from "@/components/testimonials";
import FinetuneSection from "@/components/finetune-section";
import VercelFAQ from "@/components/faq";
import NewsLetter from "@/components/newsletter";
export default function Home() {
  return (
    <div>
      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        <Hero />
        <HowItWorks />
        <Features />
        <FinetuneSection />
        <TestimonialCarousel />
        <VercelFAQ />
        {/*  <Pricing />*/}
        <NewsLetter />
      </section>
    </div>
  );
}
