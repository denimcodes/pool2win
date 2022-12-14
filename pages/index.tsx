import { ArrowRightIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Home: NextPage = () => {
	const scrollToRef = useRef<null | HTMLHeadingElement>(null);

	return (
		<div>
			<Head>
				<title>Pool2Win</title>
			</Head>
			<div className="h-screen">
				<header>
					<div className="container max-w-5xl px-8 py-8 mx-auto lg:px-0 xl:py-16 xl:max-w-6xl">
						<div className="flex items-center justify-between">
							<Link href="/">
								<a className="hover:brightness-90">
									<Image
										src="/images/pool2win.png"
										width="160px"
										height="50px"
										alt=""
									/>
								</a>
							</Link>
							{/* <h1 className="text-2xl font-medium uppercase cursor-pointer lg:text-3xl font-DMSans hover:text-gray-200">
								<Link href="/">
									<a>Pool2Win</a>
								</Link>
							</h1> */}
							<div className="flex items-center justify-center gap-8">
								<a
									onClick={() => {
										scrollToRef.current?.scrollIntoView({
											behavior: "smooth",
										});
									}}
									className="text-sm text-gray-200 uppercase hover:text-white hover:cursor-pointer lg:text-md"
								>
									How it works
								</a>
								{/* <button className="flex items-center justify-center gap-3 py-3 font-medium uppercase bg-orange-600 rounded-md hover:bg-orange-700 px-7">
									<Link href="/app/deposit">
										<a>Launch app</a>
									</Link>
								</button> */}
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className="container max-w-5xl px-8 mx-auto lg:px-0 xl:max-w-6xl">
						<section>
							<div className="flex flex-col-reverse items-center justify-between sm:flex-row h-1/6 xl:mt-1">
								<div className="flex flex-col items-center sm:items-start sm:w-1/2 space-y-7">
									<h2 className="text-3xl font-bold leading-tight text-center uppercase sm:text-left text-gray-50 xl:text-7xl md:text-5xl md:mt-20 lg:mt-8 xl:mt-0 sm:text-4xl sm:mt-20 lg:text-5xl lg:leading-tight">
										Save money and have a chance to{" "}
										<span className="text-orange-500">win prizes</span>{" "}
										&#x1F4B8;
									</h2>
									{/* <button className="py-3 text-lg font-medium text-white uppercase bg-orange-600 rounded-md px-7 hover:bg-orange-700">
									Save money and start winning
								</button> */}
									<a
										target="_blank"
										href="https://discord.gg/ufRu8haRwk"
										rel="noreferrer"
										className="flex items-center gap-3 py-3 text-lg font-medium text-white uppercase bg-orange-600 rounded-md px-7 hover:bg-orange-700"
									>
										Join Discord
										<ArrowRightIcon className="w-4 h-4" />
									</a>
									<p className="text-sm text-gray-300 uppercase">
										Launching soon
									</p>
								</div>
								<div>
									<Image
										src="/images/hero.webp"
										alt=""
										width="500px"
										height="500px"
									/>
								</div>
							</div>
							<div className="flex items-center justify-center gap-4 mt-8 md:mt-0 md:justify-start">
								<p className="text-lg font-medium text-gray-200 uppercase">
									Built on
								</p>
								<Image
									src="/images/solanaLogo.svg"
									alt=""
									width="150px"
									height="60px"
								/>
							</div>
						</section>

						<section className="py-10 xl:mt-48 lg:mt-28">
							<h2
								ref={scrollToRef}
								className="text-4xl font-medium text-center uppercase mt-14 text-gray-50 lg:text-5xl"
							>
								How does it work ?
							</h2>
							<div className="grid grid-cols-1 gap-10 sm:grid-cols-3 mt-28 lg:mt-32 xl:mt-56">
								<div className="flex gap-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="grid w-8 h-8 text-green-400 place-content-center"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<div className="space-y-4">
										<h3 className="text-3xl font-medium text-gray-100">
											Deposit money
										</h3>
										<p className="text-lg text-gray-400">
											Deposit money into the pool
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="grid w-10 h-10 text-yellow-400 place-content-center"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
										/>
									</svg>
									<div className="space-y-4">
										<h3 className="text-3xl font-medium text-gray-100">
											Interest accrues on deposits
										</h3>
										<p className="text-lg text-gray-400">
											Pool money is deployed to yield farming/lending protocols
											to earn interest
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="grid w-10 h-10 text-blue-400 place-content-center"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
										/>
									</svg>
									<div className="space-y-4">
										<h3 className="text-3xl font-medium text-gray-100">
											Win prizes
										</h3>
										<p className="text-lg text-gray-400">
											The interest is awarded as prizes to lucky winners
										</p>
									</div>
								</div>
							</div>
						</section>
						<footer className="py-20">
							<div className="flex items-center justify-center float-right gap-6">
								<p className="text-lg">Follow us on</p>
								<ul className="flex items-center gap-4">
									<li className="hover:cursor-pointer hover:brightness-90">
										<a
											target="_blank"
											href="https://twitter.com/pool2win_"
											rel="noreferrer"
										>
											<Image
												src="/images/twitter.png"
												width="23px"
												height="23px"
												alt=""
											/>
										</a>
									</li>
									<li className="hover:cursor-pointer hover:brightness-90">
										<a
											target="_blank"
											href="https://discord.gg/ufRu8haRwk"
											rel="noreferrer"
										>
											<Image
												src="/images/discord.png"
												alt=""
												width="24px"
												height="24px"
											/>
										</a>
									</li>
								</ul>
							</div>
						</footer>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;
