import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/provider/providers';
import Footer from '@/components/layout/Footer';
import { AOSInit } from '@/components/aos';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Silvia Naim',
  description: 'Web developer and designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AOSInit />
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
