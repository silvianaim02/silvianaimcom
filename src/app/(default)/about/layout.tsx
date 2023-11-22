import TechStack from '@/components/home/TechStack';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-aos='fade-up'>
      {children}
      <TechStack />
    </div>
  );
}
