import clsx from "clsx";
import IdPhoto from "@/components/ui/IdPhoto";
import HighlightText from "@/components/ui/HighlightText";
import AnimatedPointsSlider from "@/components/ui/PointsSlider";
import { section1Data } from "@/data/section-data";
import { Section1DataType } from "@/types/type";

const sectionData: Section1DataType = section1Data;

export default function Section1() {
  return (
    <section
      id="section1"
      className={clsx(
        "min-h-screen",
        "w-full",
        "flex-center",
        "text-shiny-neutral-300"
      )}
    >
      <article
        className={clsx(
          "flex",
          "md:flex-row",
          "md:w-[1000px]",
          "flex-col",
          "md:gap-16",
          "gap-4",
          "px-5"
        )}
      >
        <IdPhoto />

        <div>
          <div className={clsx("text-center")}>
            <h2
              className={clsx(
                "w-full",
                "text-shiny-yellow-900",
                "tracking-wide",
                "font-bold",
                "text-sm",
                "md:mb-8"
              )}
            >
              {sectionData.subtitle}
            </h2>
            <HighlightText />
          </div>
          <h3
            className={clsx(
              "w-full",
              "text-shiny-neutral-300",
              "md:text-lg",
              "text-sm",
              "mt-10"
            )}
          >
            {sectionData.description.heading}
          </h3>
          <article className={clsx("w-full", "my-5")}>
            <AnimatedPointsSlider points={sectionData.description.points} />
            <blockquote className="text-sm">
              {sectionData.description.conclusion}
            </blockquote>
          </article>
        </div>
      </article>
    </section>
  );
}
