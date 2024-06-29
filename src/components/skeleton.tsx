import { cn } from '@/lib/utils';

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'h-4 w-[550px] bg-white/5 rounded-md animate-pulse',
        className
      )}
    />
  );
}
