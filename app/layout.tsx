import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import clsx from 'clsx';
// 这是第二次修改，测试github的提交情况

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
