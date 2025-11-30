import { Geist, Geist_Mono } from 'next/font/google';
import NavbarShop_49 from '@/components/midterm/NavbarShop_49';

//import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'midterm p2_49',
  description: '1141 Midterm P2',
};


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarShop_49 />
        {children}
      </body>
    </html>
  );
}
