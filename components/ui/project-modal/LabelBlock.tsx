import clsx from "clsx";

interface LabelBlockProps {
  title: string;
  content: React.ReactNode;
}

export default function LabelBlock({ title, content }: LabelBlockProps) {
  return (
    <div className={clsx("w-full")}>
      <div className="w-full bg-shiny-neutral-300/30 py-2 px-2">{title}</div>
      <div className="w-full my-2">{content}</div>
    </div>
  );
}
