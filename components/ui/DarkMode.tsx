import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DarkMode() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.label
      className={clsx(
        "text-base",
        "relative",
        "inline-block",
        "w-14",
        "h-8",
        "mx-5"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ x: [0, -2, 2, -2, 2, 0] }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <input type="checkbox" className={clsx("opacity-0", "w-0", "h-0")} />
      <span
        className={clsx(
          "bg-shiny-neutral-700",
          "absolute",
          "cursor-not-allowed",
          "rounded-3xl",
          "top-0",
          "left-0",
          "right-0",
          "bottom-0",

          "before:absolute",
          "before:w-[1.4em]",
          "before:h-[1.4em]",
          "before:rounded-[50%]",
          "before:left-[10%]",
          "before:bottom-[15%]",
          "before:shadow-[inset_8px_-4px_0px_0px]",
          "before:shadow-shiny-yellow-300"
        )}
      />

      {isHovered && (
        <motion.div
          className={clsx(
            "absolute",
            "top-[60px]",
            "right-0",
            "whitespace-nowrap",
            "border",
            "border-shiny-neutral-300",
            "text-shiny-neutral-300",
            "rounded-md",
            "p-5",
            "font-thin",
            "tracking-wider"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Vampires are afraid of sun<b>light.</b> <br />
          Superman are afraid of kryptho<b>nite.</b> <br />
          Programmer are afraid of <b>light</b> IDE. <br />
          So you can&apos;t turn off dark mode.
        </motion.div>
      )}
    </motion.label>
  );
}
