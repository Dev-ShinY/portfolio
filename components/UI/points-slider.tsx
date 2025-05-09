"use client";

import clsx from "clsx";
import {
  SlideWrapper,
  useAnimatedIndex,
} from "@/components/Animations/slide-animation";
import { Points } from "@/types/type";
import { motion } from "framer-motion";

export default function AnimatedPointsSlider({ points }: Points) {
  const { selectedIndex, direction, changeIndex, sliderRef } = useAnimatedIndex(
    {
      totalSlides: points.length,
    }
  );

  return (
    <div className={clsx("w-full")}>
      <div className={clsx("flex", "justify-start", "gap-3")}>
        {points.map((_: any, index: number) => {
          const isNext = index === selectedIndex + 1;

          return (
            <motion.button
              key={index}
              onClick={() => changeIndex(index)}
              animate={
                isNext
                  ? {
                      scale: [1, 1.8, 1],
                      boxShadow: [
                        "0 0 0px rgba(255, 255, 0, 0)",
                        "0 0 10px rgba(255, 255, 0, 0.6)",
                        "0 0 0px rgba(255, 255, 0, 0)",
                      ],
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={
                isNext
                  ? {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }
                  : {}
              }
              className={clsx(
                "w-3",
                "h-3",
                "rounded-full",
                selectedIndex === index
                  ? "bg-shiny-yellow-300"
                  : "bg-shiny-neutral-500"
              )}
            />
          );
        })}
      </div>

      <SlideWrapper
        index={selectedIndex}
        direction={direction}
        sliderRef={sliderRef}
      >
        <div
          className={clsx(
            "py-5",
            "bg-shiny-neutral-800",
            "rounded-xl",
            "shadow-lg"
          )}
        >
          <h4
            className={clsx(
              "text-shiny-yellow-300",
              "md:text-xl",
              "text-base",
              "my-3"
            )}
          >
            {points[selectedIndex].title}
          </h4>
          <p
            className={clsx(
              "border-l-2",
              "border-shiny-neutral-300",
              "pl-3",
              "md:text-lg",
              "text-base"
            )}
          >
            {points[selectedIndex].description}
          </p>
        </div>
      </SlideWrapper>
    </div>
  );
}
