"use client";

import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { section2Data } from "@/data/sectionData";

export default function Section2() {
  const getStyledText = (text: string) => {
    const regex = /\[([^\]]+)\]/g;
    const result: React.ReactNode[] = [];

    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const matchStart = match.index;
      const matchEnd = regex.lastIndex;

      if (lastIndex < matchStart) {
        result.push(
          <span key={lastIndex}>{text.slice(lastIndex, matchStart)}</span>
        );
      }

      result.push(
        <strong
          key={matchStart}
          className={clsx(
            "font-semibold",
            "text-white",
            "bg-shiny-neutral-900",
            "rounded-md",
            "py-0.5",
            "px-1"
          )}
        >
          {match[1]}
        </strong>
      );

      lastIndex = matchEnd;
    }

    if (lastIndex < text.length) {
      result.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
    }

    return result;
  };

  return (
    <section
      id="section2"
      className={clsx(
        "w-full",
        "min-h-screen",
        "flex-center",
        "text-shiny-neutral-300",
        "bg-shiny-neutral-700"
      )}
    >
      <article
        className={clsx(
          "flex",
          "flex-col",
          "md:w-[1000px]",
          "h-full",
          "px-5",
          "py-10"
        )}
      >
        <h3
          className={clsx(
            "text-white",
            "text-3xl",
            "md:text-4xl",
            "font-bold",
            "mb-10",
            "w-full",
            "text-left"
          )}
        >
          Interview
        </h3>

        <div className={clsx("gap-5", "flex", "flex-col")}>
          {section2Data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={clsx(
                "bg-[#2a2a2a]",
                "text-[#dcdcdc]",
                "p-6",
                "md:p-8",
                "rounded-xl",
                "shadow-md"
              )}
            >
              <h3 className={clsx("text-xl", "font-bold", "mb-4")}>
                {item.question}
              </h3>
              <p className={clsx("text-base")}>{getStyledText(item.answer)}</p>
            </motion.div>
          ))}
        </div>
      </article>
    </section>
  );
}
