import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Japolic — Storage That Moves at the Speed of Your Compute",
  description:
    "Japolic gives developers and engineering teams high-performance shared storage for AI and data-intensive workloads, combining the speed of local storage with the flexibility of S3.",
  keywords: [
    "High-Performance Shared Storage",
    "AI storage",
    "LLM checkpoints",
    "cloud infrastructure",
    "low latency storage",
    "S3 compatible",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-[#ffffff] text-[#0f0b1a] antialiased selection:bg-[#7928ca]/20 selection:text-[#7928ca] dark:bg-[#07050d] dark:text-[#f3f1fa] font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
