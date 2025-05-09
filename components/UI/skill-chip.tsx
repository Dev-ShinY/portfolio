"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { getMappedIcon } from "@/utils/skillMapper";
import { useDominantColor } from "@/hooks/useDominantColor";
import useTextColor from "@/hooks/useTextColor";

export default function SkillChip({
  icon,
  focusType = "backgroundColor",
}: {
  icon: string;
  focusType?: string;
}) {
  const theme = "dark";
  const imgSrc = `/api/skill-icon?icon=${getMappedIcon(icon)}&theme=${theme}`;
  const dominantColor = useDominantColor(getMappedIcon(icon));
  const textColor = useTextColor(dominantColor);

  const variants = {
    backgroundColor: {
      backgroundColor: dominantColor,
      borderColor: dominantColor,
    },
    border: { borderColor: dominantColor },
  };

  return (
    <div>
      <motion.div
        className={clsx(
          "flex-center",
          "rounded-md",
          "text-xs",
          "py-[4px]",
          "px-2",
          "gap-3",
          "border"
        )}
        variants={variants}
        animate={focusType === "border" ? "border" : "backgroundColor"}
        transition={{ duration: 0.5 }}
      >
        <img
          src={imgSrc}
          alt={icon}
          className={clsx("w-[18px]", "h-[18px]", "shadow-md")}
        />
        <span
          style={{
            color: focusType === "backgroundColor" ? textColor : "white",
          }}
        >
          {icon}
        </span>
      </motion.div>
    </div>
  );
}
