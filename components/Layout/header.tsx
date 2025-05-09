"use client";

import clsx from "clsx";
import { useScrollStore } from "@/stores/store";
import { indexTitle } from "@/data/portfolioData";
import DarkMode from "@/components/UI/dark-mode";
import MoblieCategory from "@/components/Layout/mobile-category";

const sections = indexTitle.map((item, index) => {
  return { title: item, id: `section${index + 1}` };
});

export default function Header() {
  const { currentIndex, setCurrentIndex } = useScrollStore();

  return (
    <header
      className={clsx(
        "sticky",
        "flex",
        "justify-between",
        "bg-black/20",
        "w-full",
        "p-3",
        "top-0",
        "z-10"
      )}
    >
      <text className={clsx("text-shiny-neutral-100", "flex", "items-center")}>
        프론트엔드 신윤성
      </text>

      {/* desktop screen */}
      <ul
        className={clsx(
          "hidden",
          "md:flex",
          "items-center",
          "text-sm",
          "font-light",
          "text-shiny-neutral-300",
          "select-none"
        )}
      >
        {sections.map((item, index) => (
          <li
            key={index}
            className={clsx(
              "cursor-pointer",
              currentIndex === index && "text-shiny-neutral-100 font-normal"
            )}
            onClick={() => setCurrentIndex(index)}
          >
            {item.title}
            {index !== sections.length - 1 && <span className="mx-3">|</span>}
          </li>
        ))}
        <DarkMode />
      </ul>

      {/* mobile screen */}
      <MoblieCategory sections={sections} />
    </header>
  );
}
