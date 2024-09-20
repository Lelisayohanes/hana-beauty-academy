import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hani beauty academy",
  description: "Hana beauty academy ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
