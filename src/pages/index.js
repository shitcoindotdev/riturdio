import Image from 'next/image'
import { Inter } from 'next/font/google'
import Links from '@/components/Links'
import CopyCa from '@/components/copyCa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main
			className={`flex min-h-screen w-full flex-col items-center gap-8 p-8 md:justify-center ${inter.className}`}
		>
			<CopyCa contractAddress={'1234testaskdjledkjsleckn'} />
			<Links />
			{/* <div className="flex flex-col items-center gap-2">
				<p className="text-2xl font-bold text-white">riturdio.sol</p>
				<p className="text-xs text-white">CawA7rHFU1RarXiNpVr3TXLn5dYsjLLL9oFSeaNkjLHU</p>
			</div> */}
		</main>
	)
}
