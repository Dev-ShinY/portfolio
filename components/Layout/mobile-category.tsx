"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useScrollStore } from "@/stores/store";
import { motion, AnimatePresence } from "framer-motion";
import CategoryIcon from "@/assets/icon-category.webp";
import ArrowBackIcon from "@/assets/icon-arrowback.webp";

interface Props {
  title: string;
  id: string;
}

const listItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function MobileCategory({ sections }: { sections: Props[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setCurrentIndex } = useScrollStore();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    handleClose();
  };

  return (
    <>
      {/* 카테고리 버튼 */}
      <button
        className={clsx(
          "w-[2.625rem] h-[2.625rem] flex items-center justify-center rounded-full ml-2.5 md:hidden"
        )}
        onClick={handleOpen}
      >
        <Image src={CategoryIcon} width={24} height={24} alt="categories" />
      </button>

      {/* 모바일 카테고리 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx(
              "fixed",
              "top-0",
              "left-0",
              "w-full",
              "!z-20",
              "bg-shiny-neutral-900/95",
              "p-5",
              "flex",
              "flex-col",
              "h-screen"
            )}
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            exit={{ x: "100%", transition: { duration: 0.3, ease: "easeIn" } }}
          >
            <Image
              src={ArrowBackIcon}
              alt="back"
              width={24}
              height={24}
              onClick={handleClose}
              className={"cursor-pointer"}
            />

            <ul className={clsx("w-full", "h-full", "flex-col", "flex-center")}>
              <AnimatePresence mode="popLayout">
                {sections.map((item, index) => (
                  <motion.li
                    key={`${item.id}-${isOpen ? "open" : "closed"}`}
                    className={clsx(
                      "cursor-pointer",
                      "text-shiny-neutral-100",
                      "my-5",
                      "flex",
                      "flex-col",
                      "text-center"
                    )}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    onClick={() => handleSelect(index)}
                  >
                    <b className={"text-shiny-yellow-500"}>0{index + 1}.</b>
                    <span className={"text-shiny-neutral-300"}>
                      {item.title}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
