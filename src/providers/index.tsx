'use client';

import { ThemeProvider } from '@/providers/theme-provider';
import DirectionProvider from './direction-provider';
import StoreProvider from '@/store/store-provider';
import SessionProvider from './session-provider';
import { ToastContainer } from 'react-toastify';
import { useTheme } from 'next-themes';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <DirectionProvider>
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastContainer
            theme={theme === 'dark' ? 'dark' : 'light'}
            rtl
            className={'max-w-full'}
            position="top-center"
            autoClose={1500}
            bodyClassName={'font-sans'}
          />
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </StoreProvider>
    </DirectionProvider>
  );
};

export default AppProviders;
