import RootProvider from '@/components/root-provider';
import { suit, wantedSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'G2G3.DEV',
  description: 'Korean developer in California.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(wantedSans.variable, suit.variable)}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
