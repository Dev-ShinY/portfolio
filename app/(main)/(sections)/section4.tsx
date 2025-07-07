import Projects from "@/components/UI/projects";
import clsx from "clsx";

export default function Section4() {
  return (
    <section
      id="section4"
      className={clsx(
        "md:h-screen",
        "min-h-screen",
        "w-full",
        "relative",
        "flex-center",
        "bg-shiny-neutral-700",
        "flex-col",
        "py-10"
      )}
    >
      <p
        className={clsx(
          "text-lg",
          "md:text-4xl",
          "font-bold",
          "text-shiny-neutral-300",
          "text-left",
          "w-[80%]",
          "md:w-[60%]",
          "py-5"
        )}
      >
        Projects
      </p>
      <Projects />
    </section>
  );
}
