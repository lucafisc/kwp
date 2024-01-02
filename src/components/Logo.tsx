import Link from 'next/link'
import React from 'react'
import { Noto_Serif } from "next/font/google";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

export default function Logo() {
  return (
	<div className="text-5xl mb-4">
	<Link href="/">
	  <h1 className="font-medium">Kathy Meng</h1>
	</Link>
  </div>
  )
}
