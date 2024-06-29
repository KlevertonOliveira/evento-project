import { cn } from '@/lib/utils';

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1
      className={cn('text-3xl lg:text-6xl font-bold tracking-tight', className)}
    >
      {children}
    </h1>
  );
}
