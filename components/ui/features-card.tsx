import { Check, ChevronRight } from "lucide-react";
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

export const FeatureCard = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
}: FeatureCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-card rounded-3xl  " />
      <div className="relative border border-[var(--card-border)] rounded-3xl p-8 lg:p-12 bg-card transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2
                className="text-3xl lg:text-4xl  
            bg-gradient-to-t from-gray-500 to-white text-transparent bg-clip-text
              "
              >
                {title}
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed opacity-70">
                {description}
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-accent" strokeWidth={2.5} />
                  </div>
                  <span className="text-card-foreground text-base lg:text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full group/btn"
            >
              <span>Get Started Now</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={"/dash1.jpg"}
                alt={imageAlt}
                width={1200}
                height={1200}
                className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
