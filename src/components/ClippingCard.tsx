"use client";
import type { ClippingType } from "@/types/ClippingTypes";
import AppearingLine from "./AppearingLine";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {
  pressClipping: ClippingType;
  index: number;
};

export default function ClippingCard({ pressClipping, index }: Props) {
  return (
    <>
      {index === 0 && <AppearingLine />}
      <a
        href={pressClipping.pressLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group grid cursor-pointer grid-cols-10 items-center gap-4 py-4 transition-all hover:bg-primary hover:bg-opacity-5 hover:pr-2">
          <p className="col-span-2">
            {pressClipping.pressDate.substring(0, 4)}
          </p>
          <p className="col-span-5 transition-all group-hover:font-bold group-active:text-accent">
            {pressClipping.title}
          </p>
          <p className="col-span-3 flex items-center justify-end gap-1 hyphens-auto break-words text-right italic opacity-70">
            {pressClipping.pressAuthor}
            <HiArrowUpRight className="shrink-0 opacity-0 transition-all group-hover:opacity-100" />
          </p>
        </div>
      </a>
      <AppearingLine />
    </>
  );
}
