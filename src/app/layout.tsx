import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/provider/providers';
import { AOSInit } from '@/components/aos';
import NextTopLoader from 'nextjs-toploader';
import siteMetadata from '@/utils/siteMetaData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <script
        async
        src='https://umami.silvianaim.com/script.js'
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}
      />
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
