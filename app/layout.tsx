import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thue Htet Aning | Developer Portfolio",
  description: "Portfolio of Thue Htet Aning — Computer Science student and aspiring full-stack developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
