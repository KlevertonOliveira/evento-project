import SkeletonCard from '@/components/skeleton-card';

export default function Loading() {
  return (
    <div className='flex flex-wrap justify-center max-w-[68.75rem] mx-auto px-5 py-24 gap-20'>
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  );
}
