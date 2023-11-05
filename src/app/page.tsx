import Banner from '@/components/home/Banner';
import TechStack from '@/components/home/TechStack';
import RootLayout from '@/components/layout/rootLayout';

export default function Home() {
  return (
    <>
      <RootLayout>
        <Banner />
        <TechStack />
      </RootLayout>
    </>
  );
}
