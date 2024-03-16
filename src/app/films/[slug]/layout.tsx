import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <>
      {children}
      <Link
        href="/films"
        className="py-4 text-center hover:font-bold active:font-bold active:text-accent"
      >
        ← Back to all films
      </Link>
    </>
  );
}
