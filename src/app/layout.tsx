import type { Metadata } from "next";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="relative mx-auto min-h-screen max-w-screen-xl bg-slate-900 px-6 py-12 pt-0 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 md:px-12 md:py-16 lg:py-0">
        {children}
        <h1 className="lg fixed -bottom-[5rem] -left-[2rem] -z-10 hidden select-none bg-transparent opacity-10 lg:block">
          <Image
            src="/images/vn..svg"
            alt="VN."
            width={700}
            height={700}
            sizes="100vw"
          />
        </h1>
      </body>
    </html>
  );
}
