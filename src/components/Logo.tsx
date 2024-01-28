import Link from 'next/link'
import React from 'react'
import { Unbounded } from "next/font/google";


export const unbounded = Unbounded({
	subsets: ["latin"],
	weight: ['500'],
	style: 'normal',
	display: 'swap',
	variable: '--font-unbounded',
});



export default function Logo() {
	return (
		<div className="w-full pb-4 text-5xl cursor-pointer group">
			<Link href="/">
				<h1 className={`${unbounded.className} text-2xl group-active:text-accent transition-all`}>KATHY MENG</h1>
			</Link>
		</div>
	)
}
