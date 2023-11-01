import TechStack from '@/components/home/TechStack';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <TechStack />
    </>
  );
}
