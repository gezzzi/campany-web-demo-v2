import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "外壁塗装・屋根塗装・防水塗装ならネモト塗装 | 静岡県沼津市　塗装・防水のプロ集団",
  description:
    "沼津市で外壁塗装・屋根塗装をするなら有限会社ネモト塗装工業にお任せください。経験豊富な職人による完全自社施工で高品質な塗装をご提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} antialiased bg-white`}>{children}</body>
    </html>
  );
}
