import './stars.css';

export default function StarryBg({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <main className="w-screen h-screen bg-slate-800 relative overflow-hidden">
      <div className="top-0 left-0">
        <div id="stars1" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      {children}
    </main>
  );
}
