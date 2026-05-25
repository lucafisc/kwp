const rows = [
  { title: "w-4/5", author: "w-3/4" },
  { title: "w-full", author: "w-1/2" },
  { title: "w-3/5", author: "w-2/3" },
  { title: "w-11/12", author: "w-3/4" },
  { title: "w-2/3", author: "w-1/2" },
  { title: "w-4/5", author: "w-2/3" },
];

export default function Loading() {
  return (
    <main className="my-auto">
      <hr className="border-1 w-full border-primary border-opacity-30" />
      {rows.map((row, i) => (
        <div key={i}>
          <div className="grid grid-cols-10 items-center gap-4 py-4">
            <div className="col-span-2 h-3 w-8 animate-pulse rounded bg-primary bg-opacity-20" />
            <div className={`col-span-5 h-3 ${row.title} animate-pulse rounded bg-primary bg-opacity-20`} />
            <div className={`col-span-3 h-3 ${row.author} ml-auto animate-pulse rounded bg-primary bg-opacity-20`} />
          </div>
          <hr className="border-1 w-full border-primary border-opacity-30" />
        </div>
      ))}
    </main>
  );
}
