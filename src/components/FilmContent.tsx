import { FilmType } from "@/types/FilmTypes";
import FilmImage from "./FilmImage";
import FilmDescription from "./FilmDescription";

type Props = {
  film: FilmType;
};

export default function FilmContent({ film }: Props) {
  return (
    <div className="w-full overflow-hidden md:grid md:grid-cols-2 md:gap-4">
      <div className="flex flex-col items-start justify-start pt-6">
        <FilmDescription film={film} />
      </div>
      <div className="py-6">
        <FilmImage
          featuredImage={film.poster}
          accordionOpen={true}
        />
      </div>
    </div>
  );
}
