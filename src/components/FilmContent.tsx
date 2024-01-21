import { FilmType } from "@/types/FilmTypes";
import FilmImage from "./FilmImage";
import FilmDescription from "./FilmDescription";

type Props = {
    film: FilmType;
    accordionOpen: boolean;
};


export default function FilmContent({ film, accordionOpen }: Props) {


    return (
        <div className="overflow-hidden md:grid md:grid-cols-2 w-full md:pr-button md:gap-4">
            <div className="py-6 flex flex-col justify-start items-start">
               <FilmDescription film={film}/>

            </div>
            <div className="py-6">
               <FilmImage featuredImage={film.featuredImage} accordionOpen={accordionOpen}/>
            </div>
        </div>
    )
}