'use client';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-wrap-balancer';

const WrapBalancerProvider = Provider;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <WrapBalancerProvider>{children}</WrapBalancerProvider>
    </ThemeProvider>
  );
}
