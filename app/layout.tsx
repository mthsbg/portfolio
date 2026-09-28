import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTHSBG — Portfolio",
  description: "Portfolio de Matheus Borba — Product & Brand Design",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
