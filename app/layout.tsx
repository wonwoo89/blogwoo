import type { FC, ReactNode } from 'react';

import { Noto_Sans_KR } from 'next/font/google';

const font = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Blogwoo',
  description: '개인 실험실',
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className={font.className}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
