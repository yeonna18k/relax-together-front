import { Skeleton } from '@/shared/ui/skeleton';

export default function InformationSkeleton() {
  return (
    <div className="h-[240px] w-full rounded-xl border-2 border-gray-200 bg-white opacity-80 md:h-[270px]">
      <div className="p-6 pb-[25px] md:pb-[43px]">
        <div className="flex justify-between gap-4">
          <div>
            <Skeleton className="mb-2 h-6 w-48" />
            <Skeleton className="h-4 w-60" />
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <div className="mt-3 space-x-2">
          <Skeleton className="inline-block h-6 w-16" />
          <Skeleton className="inline-block h-6 w-14" />
        </div>
      </div>
      <div className="border-t-2 border-dashed border-gray-200 p-6 pt-3 md:pt-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-20" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="-ml-[10px] h-[29px] w-[29px] rounded-full first:ml-0"
                />
              ))}
            </div>
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="mt-3 h-1 w-full" />
        <div className="mt-2 flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
