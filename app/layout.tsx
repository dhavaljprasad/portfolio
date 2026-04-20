import type { Metadata } from "next";
import { Geist_Mono, Inter, Story_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const storyScript = Story_Script({
  subsets: ["latin"],
  variable: "--font-story-script",
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhaval J Prasad | Senior Software Engineer",
  description:
    "Senior Software Engineer building production-grade web platforms, AI-powered products, and scalable systems. Experienced in Next.js, React, FastAPI, and distributed backend architectures. I focus on clean UI, performance, and shipping real products, from GenAI agents and RAG systems to data-heavy dashboards and automation pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[inter.variable, storyScript.variable].join(" ")}
    >
      <body className={`${geistMono.className} antialiased`}>{children}</body>
    </html>
  );
}
