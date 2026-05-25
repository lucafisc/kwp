export default function Loading() {
  return (
    <div className="mx-auto mb-8 max-w-screen-lg w-full">
      {/* Still image skeleton */}
      <div className="mb-6 mt-12 h-72 w-full animate-pulse rounded-3xl bg-primary bg-opacity-20" />

      {/* Title + meta skeleton */}
      <div className="w-full md:grid md:grid-cols-2 md:gap-4">
        <div className="space-y-2">
          <div className="h-6 w-48 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-5 w-16 animate-pulse rounded bg-primary bg-opacity-20" />
        </div>
        <div className="mt-2 space-y-2 md:mt-0">
          <div className="h-4 w-32 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-24 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-28 animate-pulse rounded bg-primary bg-opacity-20" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mt-6 w-full md:grid md:grid-cols-2 md:gap-4">
        <div className="space-y-3 pt-6">
          <div className="h-4 w-full animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-primary bg-opacity-20" />
        </div>
        <div className="mt-6 h-64 animate-pulse rounded-xl bg-primary bg-opacity-20 md:mt-0" />
      </div>
    </div>
  );
}
