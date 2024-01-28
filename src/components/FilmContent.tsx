import { FilmType } from "@/types/FilmTypes";
import FilmImage from "./FilmImage";
import FilmDescription from "./FilmDescription";

type Props = {
    film: FilmType;
    accordionOpen: boolean;
};


export default function FilmContent({ film, accordionOpen }: Props) {


    return (
        <div className="w-full overflow-hidden md:grid md:grid-cols-2 md:pr-button md:gap-4">
            <div className="flex flex-col items-start justify-start py-6">
               <FilmDescription film={film}/>

            </div>
            <div className="py-6">
               <FilmImage featuredImage={film.featuredImage} accordionOpen={accordionOpen}/>
            </div>
        </div>
    )
}