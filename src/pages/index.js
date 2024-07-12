import Image from "next/image";
import { Inter } from "next/font/google";
import ritardio from "/public/riturdio.png"
import riturdio from "/public/riturdio.gif"
import Links from "@/components/Links";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-mario-colors flex min-h-screen w-full flex-col gap-8 items-center justify-center p-8 ${inter.className}`}
    >
    <Image className="w-[69vw] shiver max-w-[500px] h-auto" src={ritardio} width={0} height={0} alt="riturdio" />
    <Image className="w-[80vw] rounded-xl max-w-[420px] h-auto" src={riturdio} width={0} height={0} alt="riturdio" />
    <Links />
    </main>
  );
}
