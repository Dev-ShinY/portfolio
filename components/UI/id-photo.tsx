"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import idPhoto from "@/assets/it-is-me.png";

export default function IdPhoto() {
  const [isHovered, setIsHovered] = useState(false);
  const mobileIdSize = 150;

  return (
    <motion.div
      className={clsx(
        "relative",
        `w-[var(--mobile-size)]`,
        `h-[var(--mobile-size)]`,
        "md:w-[300px]",
        "md:h-[300px]",
        "m-auto"
      )}
      style={{ "--mobile-size": `${mobileIdSize}px` } as React.CSSProperties}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={clsx(
          `w-[var(--mobile-size)]`,
          `h-[var(--mobile-size)]`,
          "md:w-[300px]",
          "md:h-[300px]",
          "absolute",
          "-top-3",
          "-left-3",
          "z-10"
        )}
        style={{ "--mobile-size": `${mobileIdSize}px` } as React.CSSProperties}
        animate={{ x: isHovered ? -10 : 0, y: isHovered ? -10 : 0 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Image
          src={idPhoto}
          alt={"idPhoto"}
          className={clsx("w-full", "h-full", "object-cover", "rounded-md")}
        />
      </motion.div>

      <motion.div
        className={clsx(
          `w-[var(--mobile-size)]`,
          `h-[var(--mobile-size)]`,
          "md:w-[300px]",
          "md:h-[300px]",
          "border-2",
          "border-shiny-yellow-900",
          "rounded-md"
        )}
        style={{ "--mobile-size": `${mobileIdSize}px` } as React.CSSProperties}
        animate={{ x: isHovered ? 10 : 0, y: isHovered ? 10 : 0 }}
        transition={{ type: "tween", duration: 0.2 }}
      />
    </motion.div>
  );
}
