'use client';

import { ThemeProvider } from '@/providers/theme-provider';
import DirectionProvider from './direction-provider';
import StoreProvider from '@/store/store-provider';
import SessionProvider from './session-provider';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <DirectionProvider>
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </StoreProvider>
    </DirectionProvider>
  );
};

export default AppProviders;
