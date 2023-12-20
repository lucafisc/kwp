import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Carousel({ children }: Props) {
  return (
    <div className="overflow-hidden">
      <div className="flex ">{children}</div>
    </div>
  );
}
