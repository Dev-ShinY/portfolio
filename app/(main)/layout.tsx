import clsx from "clsx";
import ScrollWrapper from "./scroll-wrapper";
import Header from "@/components/Layout/header";
import ScrollIndicator from "@/components/UI/scroll-indicator";
import EmailAccessButton from "@/components/UI/email-access-button";

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
