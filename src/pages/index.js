import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Links from '@/components/Links'
import Copyca from '@/components/Copyca'
import onigiri from '/public/onigiri.png'
import onigiribro from '/public/onigiribro.jpeg'
import onigirismad from '/public/onigirismad.jpeg'
import cuteonigiri from '/public/cuteonigiri.jpeg'
import onigiritrio from '/public/onigiritrio.jpeg'
import TweetEmbed from '@/components/TweetEmbed'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
	return (
		<main
			className={`flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden bg-pink-100 py-12 text-[20px] font-semibold sm:px-8 ${nunito.className}`}
		>
			<Image src={onigiri} className="w-[600px] max-w-[85%]" />
			<div className="flex w-full justify-evenly sm:justify-center sm:gap-6">
				<div className="w-[120px] rounded-xl sm:w-[150px] md:h-[260px] md:w-[200px]">
					<Image className="rotating-element h-full rounded-xl shadow-xl" src={onigirismad} />
				</div>
				<div className="w-[120px] rounded-xl sm:w-[150px] md:h-[260px] md:w-[200px]">
					<Image className="rotating-element h-full rounded-xl shadow-xl" src={cuteonigiri} />
				</div>
				<div className="w-[120px] rounded-xl sm:w-[150px] md:h-[260px] md:w-[200px]">
					<Image className="rotating-element h-full rounded-xl shadow-xl" src={onigiritrio} />
				</div>
			</div>
			<div className="mx-8 flex max-w-[600px] flex-col gap-6 text-center text-[16px] sm:text-[20px]">
				<p>
					Onigiri, named after the iconic Japanese food 🍙 due to its unique fur pattern, is the cat 🐈‍⬛ of{' '}
					<a
						target="_blank"
						className="pointer-cursor"
						href="https://www.instagram.com/kabosumama?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					>
						@kabosumama
					</a>
					.
				</p>
				<p>
					<a
						target="_blank"
						className="pointer-cursor"
						href="https://www.instagram.com/kabosumama?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					>
						@kabosumama{' '}
					</a>
					is most known for being the mother of Kabosu, widely known as Doge online. Kabosu unfortunately
					passed away on May 24, 2024. While there's no replacing her impact and legacy, her little friend
					Onigiri plans to claim her spot as the biggest coin on Solana.
				</p>
			</div>
			<Copyca contractAddress={'0xA7f0C9E21DeE78B4c99c78dBeda53724Eb6af062'} />
			<button className="rounded-xl bg-pink-400 px-8 py-3 text-[20px] font-semibold tracking-tight text-white shadow-lg">
				Buy some $onigiri!
			</button>
			<TweetEmbed tweetUrl={'https://x.com/kabosumama/status/1036063695162421248/photo/1'} />
			<Image className="w-[400px] max-w-[69%] rounded-lg shadow-lg" src={onigiribro} />
			<p className="text-[16px] font-semibold sm:text-[20px]">Stay up to date with $ONIGIRI 🍙🐈‍⬛🍙</p>
			<Links />
			{/* <div className="flex flex-col items-center gap-2">
				<p className="text-2xl font-bold text-white">riturdio.sol</p>
				<p className="text-xs text-white">CawA7rHFU1RarXiNpVr3TXLn5dYsjLLL9oFSeaNkjLHU</p>
			</div> */}
		</main>
	)
}
