import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Link from "next/link";
import { Button } from "./ui/button";

export function HeroSection() {
	return (
		<section className="bg-white text-center flex flex-col items-center justify-center min-h-screen">
			<div className="flex items-center justify-center mb-2">
				<div
					className={cn(
						"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
					)}
				>
					<Link href={"https://github.com/arkhanardana"}>
						<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
							<span>✨ Introducing Websitein</span>
							<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedShinyText>
					</Link>
				</div>
			</div>
			<h1 className="max-w-lg px-4 mx-auto text-3xl font-semibold sm:text-4xl pt-7 md:text-5xl lg:text-6xl md:max-w-2xl lg:max-w-4xl lg:px-8">
				Solusi {""}
				<span className="text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text">
					Jasa Pembuatan Website {""}
				</span>
				Keren dan Modern
			</h1>
			<p className="max-w-lg px-4 py-4 mx-auto text-base font-medium text-center md:text-xl md:max-w-2xl text-gray-600/90">
				Websitein adalah Jasa Pembuatan Website dengan menerapkan desain yang kreatif serta modern
			</p>
			<div className="flex items-center justify-center pt-2 gap-x-2">
				<Link href={"#pricing"}>
					<Button className="p-[22px] md:p-6 rounded-xl bg-blue-600 hover:bg-blue-800 text-sm md:text-md lg:text-base font-medium text-white flex justify-center">
						Pesan Sekarang
					</Button>
				</Link>
			</div>
		</section>
	);
}
