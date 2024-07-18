'use client';

import { TooltipProvider } from './ui/tooltip';

export default function RootProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
