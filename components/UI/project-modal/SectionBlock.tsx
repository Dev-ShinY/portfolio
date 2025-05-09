import clsx from "clsx";

interface SectionBlockProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export default function SectionBlock({
  title,
  icon,
  children,
}: SectionBlockProps) {
  return (
    <div className={clsx("flex", "flex-col", "gap-2", "flex-wrap", "w-full")}>
      <p className={clsx("text-xl", "font-bold")}>
        {icon && `${icon} `}
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
}
