import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waqar Rajpoot — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in MERN Stack & Next.js. Building high-performance, production-ready web applications.",
  keywords: ["Waqar Rajpoot", "Full Stack Developer", "Next.js", "MERN", "React", "MongoDB"],
  authors: [{ name: "Waqar Rajpoot" }],
  openGraph: {
    title: "Waqar Rajpoot — Full-Stack Developer",
    description: "MERN & Next.js Expert | Building scalable, secure systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}
      cz-shortcut-listen="true">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="waqar-portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
