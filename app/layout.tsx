import './globals.css'
import type {ReactNode} from "react";
import { Noto_Sans_KR } from "next/font/google";

const font = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Blogwoo',
  description: '개인 실험실',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <main className={font.className}>
        {children}
      </main>
      </body>
    </html>
  )
}
