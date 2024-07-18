import { cn } from '@/lib/utils';

export default function AlgorixLogo({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div>
      <span className={cn('logo', className)}>algorix </span>
      <span className={cn('logo-sub', className)}>corporation</span>
    </div>
  );
}
