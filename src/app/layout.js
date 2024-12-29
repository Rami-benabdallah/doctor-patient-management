import "./globals.css";
import { Roboto } from 'next/font/google';

import { DocSideBar } from "./components/DocSideBar/DocSideBar";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex">
        <DocSideBar />
        <div className="w-full bg-bodyBg px-10 py-12 ml-64">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
