"use client";
import { cn } from "@/lib/utils";
import { motion, Transition } from "motion/react";

export type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
  trailLength?: number;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  onAnimationComplete,
  style,
  trailLength = 150,
}: BorderTrailProps) {
  const defaultTransition: Transition = {
    repeat: Infinity,
    duration: 4.6,
    ease: "linear",
    restSpeed: 30, // This will create a 1.5 second delay before each repeat
  };

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
      {/* Main container with mask to hide at edges (middle of each side) */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          mask: `
            radial-gradient(circle at 50% 0%, black 80%, transparent 85%),
            radial-gradient(circle at 100% 50%, black 80%, transparent 85%),
            radial-gradient(circle at 50% 100%, black 80%, transparent 85%),
            radial-gradient(circle at 0% 50%, black 80%, transparent 85%),
            linear-gradient(black, black)
          `,
          maskComposite: "subtract",
          WebkitMask: `
            radial-gradient(circle at 50% 0%, black 60%, transparent 89%),
            radial-gradient(circle at 100% 50%, black 60%, transparent 89%),
            radial-gradient(circle at 50% 100%, black 60%, transparent 89%),
            radial-gradient(circle at 0% 50%, black 60%, transparent 89%),
            linear-gradient(black, black)
          `,
          WebkitMaskComposite: "source-out",
        }}
      >
        {/* The trail element */}
        <motion.div
          className={cn(
            "absolute h-full bg-linear-to-l dark:from-gray-200 dark:via-gray-400 dark:to-gray-700",
            className
          )}
          style={{
            width: `${trailLength}px`,
            // Use a gradient that works with light/dark mode

            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            ...style,
          }}
          animate={{
            offsetDistance: ["0%%", "100%"],
          }}
          transition={transition || defaultTransition} // This applies the repeatDelay
          onAnimationComplete={onAnimationComplete}
        />
      </div>
    </div>
  );
}
