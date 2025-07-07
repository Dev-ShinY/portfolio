"use client";

import clsx from "clsx";
import { useScrollStore } from "@/stores/store";
import { useState } from "react";
import { motion } from "framer-motion";
import { indexTitle } from "@/data/portfolioData";

export default function ScrollIndicator() {
  const { currentIndex, setCurrentIndex } = useScrollStore();
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <ul
      className={clsx(
        "absolute",
        "top-[50%]",
        "-translate-y-[50%]",
        "right-5",

        "hidden",
        "md:block"
      )}
    >
      {indexTitle.map((item, index) => {
        return (
          <li
            key={index}
            className={clsx(
              "cursor-pointer",
              "w-full",
              "flex",
              "items-center",
              "justify-center"
            )}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <motion.span
              className={clsx(
                "mr-2",
                "text-shiny-neutral-100/50",
                "min-w-28",
                "text-right",
                "hidden",
                "md:inline"
              )}
              animate={{ opacity: hoverIndex === index ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {item}
            </motion.span>

            <motion.div
              className={clsx(
                "rounded-full",
                "bg-shiny-neutral-100/50",
                "my-3"
              )}
              animate={{
                height:
                  currentIndex === index ? 10 : hoverIndex === index ? 8 : 4,
                width:
                  currentIndex === index ? 10 : hoverIndex === index ? 8 : 4,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </li>
        );
      })}
    </ul>
  );
}
