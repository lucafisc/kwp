import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <>
      {children}
      <Link href="/filmblog">← Back to all films</Link>
    </>
  );
}
