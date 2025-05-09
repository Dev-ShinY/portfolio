"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { githubData } from "@/data/portfolioData";

export default function Section5() {
  return (
    <motion.section
      id="section5"
      className={clsx(
        "min-h-screen",
        "w-full",
        "flex-center",
        "text-center",
        "relative"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h1
        className={clsx(
          "text-[7vw]",
          "font-bold",
          "text-shiny-neutral-500",
          "absolute",
          "top-1/3"
        )}
      >
        Thank You
      </h1>
      <motion.div
        className={clsx("relative", "z-10")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: false }}
      >
        <p
          className={clsx(
            "text-2xl",
            "font-semibold",
            "text-shiny-neutral-100",
            "mb-4"
          )}
        >
          봐주셔서 감사합니다 :)
        </p>
        <p
          className={clsx(
            "text-shiny-neutral-100",
            "max-w-lg",
            "text-sm",
            "leading-relaxed",
            "mb-6"
          )}
        >
          프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
          <br />
          기술과 감성을 담은 경험을 만들어가는 개발자가 되고 싶습니다.
        </p>
        <div className={clsx("flex gap-4 justify-center")}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={githubData}
            className={clsx(
              "border-b-2",
              "border-shiny-neutral-100",
              "hover:text-shiny-neutral-100",
              "text-shiny-neutral-300"
            )}
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
