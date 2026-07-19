import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PortoTree - Web Portofolio Online",
  description: "Buat web portofolio online profesional tanpa coding dengan PortoTree.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col custom-scrollbar overflow-x-hidden">
        {children}
        
        {/* Temporary Development Toast */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-sm font-medium shadow-2xl border border-white/10 flex items-center gap-2 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-500 whitespace-nowrap w-max">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></div>
          Sedang tahap development
        </div>
      </body>
    </html>
  );
}
