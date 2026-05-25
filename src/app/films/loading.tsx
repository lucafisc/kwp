export default function Loading() {
  return (
    <main>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="mx-auto my-6 h-48 w-full max-w-screen-lg animate-pulse rounded-3xl bg-primary bg-opacity-20 lg:h-72"
        />
      ))}
    </main>
  );
}
