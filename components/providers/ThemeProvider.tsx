'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Ensures class-based theming
      enableSystem={true} // Enables system theme support
      defaultTheme="system" // Fallback to system theme if no preference is set
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
