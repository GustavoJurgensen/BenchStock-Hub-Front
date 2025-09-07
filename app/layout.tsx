import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/main/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "BenchStock Hub",
  description: "BenchStock Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full h-full antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
