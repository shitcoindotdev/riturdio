import Image from 'next/image'
import { Inter } from 'next/font/google'
import ritardio from '/public/riturdio.png'
import riturdio from '/public/riturdio.gif'
import Links from '@/components/Links'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main
			className={`bg-mario-colors flex min-h-screen w-full flex-col items-center gap-8 p-8 md:justify-center ${inter.className}`}
		>
			<Image
				className="shiver h-auto w-[69vw] max-w-[500px]"
				src={ritardio}
				width={0}
				height={0}
				alt="riturdio"
			/>
			<Image
				className="h-auto w-[80vw] max-w-[420px] rounded-xl"
				src={riturdio}
				width={0}
				height={0}
				alt="riturdio"
			/>
			<Links />
			<div className="flex flex-col items-center gap-2">
				<p className="text-2xl font-bold text-white">riturdio.sol</p>
				<p className="text-xs text-white">CawA7rHFU1RarXiNpVr3TXLn5dYsjLLL9oFSeaNkjLHU</p>
			</div>
		</main>
	)
}
