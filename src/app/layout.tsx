import type { Metadata } from "next";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen wrapper bg-gradient-to-br from-stone-500 via-stone-600 to-stone-700 py-5">
        <div className="shadow-[-20px_20px_30px_rgba(0,0,0,0.9)] translate-y-[-10px] rounded-3xl bg-stone-200">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
