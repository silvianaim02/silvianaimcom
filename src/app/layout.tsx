import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/provider/providers';
import Footer from '@/components/layout/Footer';
import { AOSInit } from '@/components/aos';
import NextTopLoader from 'nextjs-toploader';
import ChoiceLayout from '@/components/layout/rootLayout';

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
        <NextTopLoader
          color='#2299DD'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing='ease'
          speed={200}
          shadow='0 0 10px #2299DD,0 0 5px #2299DD'
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
