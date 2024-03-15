import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <>
      {children}
      <Link href="/filmblog" className="py-4 hover:font-bold active:font-bold active:text-accent text-center">← Back to all films</Link>
    </>
  );
}
