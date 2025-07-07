import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const FONT = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/Pretendard-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "신윤성 웹 포트폴리오",
  description: "shiny's web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FONT.className}>{children}</body>
    </html>
  );
}
