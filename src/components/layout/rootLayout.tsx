'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { usePathname } from 'next/navigation';
import KeystaticLayout from '@/app/keystatic/layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  // if (pathname.startsWith("/keystatic")) {
  //   return <div><KeystaticLayout /></div>
  // }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
