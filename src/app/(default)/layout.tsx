import RootLayout from '@/components/layout/rootLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootLayout>{children}</RootLayout>
    </>
  );
}
