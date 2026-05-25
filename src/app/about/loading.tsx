export default function Loading() {
  return (
    <main className="my-auto h-full">
      <div className="grid h-full w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="h-full min-h-64 w-full animate-pulse rounded-xl bg-primary bg-opacity-20" />
        <div className="flex flex-col justify-center space-y-3 md:justify-center">
          <div className="h-4 w-full animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="mt-4 h-4 w-48 animate-pulse rounded bg-primary bg-opacity-20" />
        </div>
      </div>
    </main>
  );
}
