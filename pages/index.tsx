import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="text-white bg-dark font-DMSans">
			<Head>
				<title>Pool2Win</title>
			</Head>
			<header>
				<div className="container max-w-5xl py-8 mx-auto">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-medium uppercase cursor-pointer font-DMSans hover:text-gray-200">
							<Link href="/">
								<a>Pool2Win</a>
							</Link>
						</h1>
						<div className="flex items-center justify-center gap-8">
							<a href="#" className="text-gray-200 hover:text-white text-md">
								How it works
							</a>
							<button className="flex items-center justify-center gap-3 py-3 font-medium uppercase bg-orange-600 rounded-md hover:bg-orange-700 px-7">
								<Link href="/app/deposit">
									<a>Launch app</a>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className="container max-w-5xl py-20 mx-auto">
					<section className="flex h-screen">
						<div className="w-1/2 space-y-7">
							<h2 className="text-5xl font-bold leading-tight uppercase text-gray-50">
								Save money and have a chance to win prizes &#x1F4B8;
							</h2>
							<button className="py-3 text-lg font-medium text-white uppercase bg-orange-600 rounded-md px-7 hover:bg-orange-700">
								Save money and start winning
							</button>
							<p className="text-sm text-gray-300 uppercase">
								Currently in testing
							</p>
						</div>
						<div>{/* Add illustration */}</div>
					</section>
					<section>
						<h2 className="mt-10 text-5xl font-medium text-center uppercase text-gray-50">
							How does it work?
						</h2>
						<div className="grid grid-cols-3 gap-10 mt-64">
							<div className="space-y-4">
								<h3 className="text-3xl font-medium text-gray-100">Deposit money</h3>
								<p className="text-lg text-gray-400">
									Deposit money into the savings pool
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-3xl font-medium text-gray-100">
									Earn interest on deposits
								</h3>
								<p className="text-lg text-gray-400">
									Farming strategies are used to earn interest with pool money
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-3xl font-medium text-gray-100">Win prizes</h3>
								<p className="text-lg text-gray-400">
									The interest earned is given out to depositors as prizes
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

export default Home;
