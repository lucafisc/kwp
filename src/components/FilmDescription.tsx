import { FilmType } from "@/types/FilmTypes";
import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";

type Props = {
    film: FilmType
};

export default function FilmDescription({ film }: Props) {
    const [showTrailer, setShowTrailer] = useState(false);
    const [showMovie, setShowMovie] = useState(false);

    return (
        <>
            <div
                dangerouslySetInnerHTML={{ __html: film.synopsis }}
                className="mb-6"
            />
            {film.additionalInformation.map((additional, index) => (
                <p key={index} className="mb-6">{additional}</p>
            ))}

            {film.festivals.map((festival, index) => (
                <p key={index} className="mb-6">{festival}</p>
            ))}

            {film.trailer && <button
                onClick={() => setShowTrailer((previousState) => !previousState)}
                className="mt-auto border border-primary rounded-full p-2 flex items-center justify-between text-primary gap-1
            hover:bg-primary hover:text-secondary active:scale-95 transition-all
            "><IoPlaySharp />
                trailer</button>}
            {showTrailer && film.trailer && <div 
            onClick={() => setShowTrailer(false)}
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70 bg-black">
                <ReactPlayer url={film.trailer}
                 muted={true}
                 controls={true}
                 />
            </div>}

            {film.fullMovie && <button
                onClick={() => setShowMovie((previousState) => !previousState)}
                className="mt-auto border border-primary rounded-full p-2 flex items-center justify-between text-primary gap-1
            hover:bg-primary hover:text-secondary active:scale-95 transition-all
            "><IoPlaySharp />
                full movie</button>}
            {showMovie && film.fullMovie && <div 
            onClick={() => setShowMovie(false)}
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70 bg-black">
                <ReactPlayer url={film.fullMovie}
                 muted={true}
                 controls={true}
                 />
            </div>}

        </>
    )
}