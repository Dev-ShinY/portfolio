"use client";

import { motion } from "framer-motion";
import { mailData } from "@/data/portfolio-data";
import clsx from "clsx";

export default function EmailAccessButton() {
  return (
    <div
      className={clsx(
        "fixed",
        "bottom-0",
        "right-10",
        "md:flex",
        "md:flex-col",
        "hidden",
        "items-center",
        "gap-4"
      )}
    >
      <motion.a
        href={`mailto:${mailData}`}
        className={clsx(
          "text-shiny-neutral-300",
          "tracking-widest",
          "font-extralight",
          "[writing-mode:vertical-lr]"
        )}
        whileHover={{ y: -5, color: "#f0b023" }}
      >
        {mailData}
      </motion.a>

      <div className={clsx("bg-shiny-neutral-300", "h-[100px]", "w-[1px]")} />
    </div>
  );
}
