import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import "../index.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Sizzle | Precision-Driven Weightlifting Training",
  description:
    "Professional weightlifting training videos built around precision, technique, and measurable progress. Learn, refine, and improve every lift with Red Sizzle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Browser extensions (Grammarly, Free Download Manager) inject attributes
          into <body> before hydration; suppress the resulting false-positive warning. */}
      <body
        suppressHydrationWarning
        className={`${oswald.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-svh flex-col bg-navy text-white">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
