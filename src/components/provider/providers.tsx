'use client';
// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-wrap-balancer';

const WrapBalancerProvider = Provider;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <WrapBalancerProvider>{children}</WrapBalancerProvider>
    </ThemeProvider>
  );
}
