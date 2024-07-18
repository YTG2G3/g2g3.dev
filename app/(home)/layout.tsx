import { Separator } from '@/components/ui/separator';
import Nav from './nav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-rows-screen">
      <Nav />
      <Separator />
      <div className="overflow-auto no-scrollbar">{children}</div>
    </div>
  );
}
