import { FilmType } from "@/types/FilmTypes";
import MoviePlayer from "./MoviePlayer";
import { unbounded } from "./Logo";

type Props = {
  film: FilmType;
};

export default function FilmDescription({ film }: Props) {
  return (
    <div className="flex h-full flex-col">
      <div
        dangerouslySetInnerHTML={{ __html: film.synopsis }}
        className={`prose mb-6 max-w-none [&_li]:my-0 [&_li::marker]:text-inherit [&_h1]:font-[family-name:var(--font-unbounded)] [&_h2]:font-[family-name:var(--font-unbounded)] [&_h3]:font-[family-name:var(--font-unbounded)] [&_h4]:font-[family-name:var(--font-unbounded)] [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h1]:uppercase [&_h2]:uppercase [&_h3]:uppercase [&_h4]:uppercase [&_h1]:text-primary [&_h2]:text-primary [&_h3]:text-primary [&_h4]:text-primary ${unbounded.variable}`}
      />

      {film.additionalInformation.map((additional, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: additional }}
          className={`prose mb-6 max-w-none [&_li]:my-0 [&_li::marker]:text-inherit [&_h1]:font-[family-name:var(--font-unbounded)] [&_h2]:font-[family-name:var(--font-unbounded)] [&_h3]:font-[family-name:var(--font-unbounded)] [&_h4]:font-[family-name:var(--font-unbounded)] [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h1]:uppercase [&_h2]:uppercase [&_h3]:uppercase [&_h4]:uppercase [&_h1]:text-primary [&_h2]:text-primary [&_h3]:text-primary [&_h4]:text-primary ${unbounded.variable}`}
        />
      ))}

<div className="mt-auto">
        <MoviePlayer label="trailer" movie={film.trailer} external={film.trailerExternal} />
        <MoviePlayer label="full movie" movie={film.fullMovie} external={film.fullMovieExternal} />
      </div>
    </div>
  );
}
