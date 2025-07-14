"use client";

import clsx from "clsx";
import SkillChip from "@/components/ui/SkillChip";
import { projects } from "@/data/section-data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModal from "./project-modal/ProjectModal";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const TitleWithLineBreaks = ({ text }: { text: string }) => (
    <>
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </>
  );

  return (
    <div
      className={clsx(
        "grid",
        "grid-cols-1",
        "gap-4",
        "w-[80%]",
        "md:grid-cols-4",
        "md:grid-row-3",
        "md:w-[60%]"
      )}
    >
      {projects.map((item, index) => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const imagePath = require(`@/assets${item.mainImg}`).default;

        return (
          <motion.div
            key={item.title}
            className={clsx(
              "bg-shiny-neutral-500",
              "h-[300px]",
              "rounded-lg",
              "cursor-pointer",
              "flex",
              "relative"
            )}
            onHoverStart={() => setHoveredIdx(index)}
            onHoverEnd={() => setHoveredIdx(null)}
          >
            <div className={clsx("flex", "flex-col", "justify-between")}>
              <div
                className={clsx(
                  "h-[55%]",
                  "rounded-t-lg",
                  "bg-cover",
                  "bg-center",
                  "bg-blend-darken"
                )}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${imagePath.src})`,
                }}
              >
                {!isMobile && (
                  <p
                    className={clsx(
                      "text-shiny-neutral-100",
                      "text-lg",
                      "font-medium",
                      "tracking-tight",
                      "m-5",
                      hoveredIdx === index && "blur-sm"
                    )}
                  >
                    <TitleWithLineBreaks text={item.title} />
                  </p>
                )}
              </div>

              <span
                className={clsx(
                  "flex",
                  "flex-wrap",
                  "content-start",
                  "h-fit",
                  "gap-x-2",
                  "gap-y-[6px]",
                  "m-5",
                  "h-[45%]",
                  "md:z-10"
                )}
              >
                {item.skill.map((item) => (
                  <SkillChip
                    key={item}
                    icon={item}
                    focusType={
                      hoveredIdx === index ? "backgroundColor" : "border"
                    }
                  />
                ))}
              </span>
            </div>

            {/* hover */}
            <AnimatePresence>
              {(hoveredIdx === index || isMobile) && (
                <motion.div
                  className={clsx(
                    "absolute",
                    !isMobile && "bg-shiny-neutral-900/85",
                    "text-shiny-neutral-100",
                    "rounded-lg",
                    "h-full",
                    "w-full"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <div
                    className={clsx(
                      "h-[55%]",
                      "w-full",
                      "flex-center",
                      "flex-col",
                      "p-5",
                      "gap-4"
                    )}
                  >
                    <span
                      className={clsx(
                        "text-xl",
                        "tracking-tight",
                        "text-center"
                      )}
                    >
                      <TitleWithLineBreaks text={item.title} />
                    </span>
                    <button
                      className={clsx(
                        "border",
                        "border-white",
                        "px-10",
                        "py-2",
                        "rounded",
                        "hover:bg-white",
                        "hover:text-shiny-neutral-900"
                      )}
                      onClick={() => setSelectedKey(item.id)}
                    >
                      자세히 보기
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
      {selectedKey !== null && (
        <ProjectModal
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
      )}
    </div>
  );
}
