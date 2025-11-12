import { FeatureCard } from "./ui/features-card";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "./global/wrapper";
import { Container } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const features = [
    {
      title: "Get proper data & sales statistics.",
      description:
        "Gain invaluable predictive analytics and actionable insights, empowering you to make data-driven decisions and close deals more effectively.",
      features: [
        "Event marketing",
        "Content creation",
        "Brand strategy",
        "Data analyzing",
      ],
      imageSrc: "./dash1.jpg",
      imageAlt: "Analytics dashboard showing sales statistics",
    },
    {
      title: "Bring visitors from different sources.",
      description:
        "Gain invaluable predictive analytics and actionable insights, empowering you to make data-driven decisions and close deals more effectively.",
      features: [
        "Event marketing",
        "Content creation",
        "Brand strategy",
        "Data analyzing",
      ],
      imageSrc: "./dash1.jpg",
      imageAlt: "Traffic sources dashboard visualization",
    },
    {
      title: "Acquire and retain more customers.",
      description:
        "Gain invaluable predictive analytics and actionable insights, empowering you to make data-driven decisions and close deals more effectively.",
      features: [
        "Event marketing",
        "Content creation",
        "Brand strategy",
        "Data analyzing",
      ],
      imageSrc: "./dash1.jpg",
      imageAlt: "Customer retention analytics interface",
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".feature-card");
    const spacer = 20;
    const minScale = 0.85;

    cards.forEach((card, index) => {
      const scaleVal = minScale + (1 - minScale) * (1 - index / cards.length);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top+=70",
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top+=70`,
        endTrigger: cards[cards.length - 1],
        end: `bottom top+=70`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="text-center ">
        <motion.div
          className="h-0.5 w-full mt-4 bg-linear-to-l from-transparent via-gray-600 to-transparent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-semibold bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent"
        >
          Powerful Growth Insights
        </motion.h2>
      </div>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={cardsRef} className="space-y-8 lg:space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
