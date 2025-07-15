"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

export default function HighlightText({
  name = "신윤성",
  role = "프론트엔드 개발자",
}) {
  return (
    <h1
      className={clsx(
        "w-full",
        "text-shiny-neutral-100",
        "md:text-5xl",
        "text-base",
        "flex",
        "justify-center"
      )}
    >
      저는
      <motion.b
        initial={{ width: 0 }}
        animate={{ width: "max-content" }}
        transition={{ duration: 1 }}
        className={clsx(
          "md:bg-shiny-yellow-900/50",
          "md:border-shiny-yellow-900",
          "md:border-r-[3px]",
          "md:px-3",
          "px-1",
          "w-[200px]",
          "rounded-l-lg",
          "whitespace-nowrap",
          "overflow-hidden"
        )}
      >
        <span className={clsx("md:hidden")}> {role}, </span>
        {name}입니다
      </motion.b>
      <span
        className={clsx(
          "bg-shiny-yellow-900",
          "-ml-[3px]",
          `-mt-[28px]`,
          "px-3",
          "py-2",
          `text-[14px]`,
          "w-max",
          "h-fit",
          "rounded-t-lg",
          "rounded-r-lg",

          "hidden",
          "md:block"
        )}
      >
        {role}
      </span>
    </h1>
  );
}
