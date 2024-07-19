import { cn } from '@/lib/utils';
import './stars.css';

export default function StarryBg({
  children,
  fullscreen = true, // force fullscreen?
}: Readonly<{ children?: React.ReactNode; fullscreen?: boolean }>) {
  return (
    <main
      className={cn(
        'bg-slate-800 relative overflow-hidden',
        fullscreen ? 'w-screen h-screen' : 'w-full h-full',
      )}
    >
      <div className="top-0 left-0">
        <div id="stars1" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      {children}
    </main>
  );
}
