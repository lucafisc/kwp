import React from "react";
import Line from "./Line";
import type { ClippingType } from "@/types/ClippingTypes";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

type Props = {
  pressClipping: ClippingType;
};

export default function FilmCard({ pressClipping }: Props) {
  return (
    <>
      <Line borderSize={1} />
      <Link href={pressClipping.link}>
        <div className="grid grid-cols-5 gap-4 py-4 group text-black cursor-pointer">
          <h1 className="col-span-1">{pressClipping.pressDate}</h1>
          <h1 className="col-span-3 group-hover:font-bold transition-all">
            {pressClipping.title}
          </h1>
          <h1 className="col-span-1 text-right">{pressClipping.pressAuthor}</h1>
        </div>
      </Link>
    </>
  );
}
