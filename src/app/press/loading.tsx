export default function Loading() {
  return (
    <main className="my-auto">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="grid grid-cols-10 gap-4 py-4 border-b border-primary border-opacity-20">
          <div className="col-span-2 h-4 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="col-span-5 h-4 animate-pulse rounded bg-primary bg-opacity-20" />
          <div className="col-span-3 h-4 animate-pulse rounded bg-primary bg-opacity-20" />
        </div>
      ))}
    </main>
  );
}
