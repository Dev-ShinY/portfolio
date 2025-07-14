import clsx from "clsx";
import ScrollWrapper from "./ScrollWrapper";
import Header from "@/components/layout/Header";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import EmailAccessButton from "@/components/ui/EmailAccessButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        "w-screen",
        "min-h-screen",
        "flex",
        "flex-col",
        "items-center",
        "bg-shiny-neutral-900",
        "select-none"
      )}
    >
      <Header />
      <ScrollWrapper>{children}</ScrollWrapper>
      <ScrollIndicator />
      <EmailAccessButton />
    </div>
  );
}
