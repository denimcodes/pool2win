import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="text-white bg-dark font-DMSans">
			<Head>
				<title>Pool2Win</title>
			</Head>
			<header>
				<div className="container max-w-5xl py-8 mx-auto">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-medium uppercase font-DMSans">
							Pool2Win
						</h1>
						<div className="flex items-center justify-center gap-8 text-gray-300">
							<a href="#" className="text-md">How it works</a>
							<button className="flex items-center justify-center gap-3 py-3 font-medium uppercase rounded-md white px-7 bg-accent">
								Launch app
							</button>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className="container max-w-5xl py-20 mx-auto">
					<section className="flex h-screen">
						<div className="w-1/2 space-y-7">
							<h2 className="text-5xl font-bold leading-tight uppercase">
								Save money and have a chance to win prizes &#x1F4B8;
							</h2>
							<button className="py-3 text-lg font-medium text-white uppercase rounded-md px-7 bg-accent">
								Save money and start winning
							</button>
							<p className="text-sm text-gray-200 uppercase">
								Currently in testing
							</p>
						</div>
						<div>{/* Add illustration */}</div>
					</section>
					<section>
						<h2 className="mt-10 text-5xl font-medium text-center uppercase">
							How does it work?
						</h2>
						<div className="grid grid-cols-3 gap-10 mt-64">
							<div className="space-y-4">
								<h3 className="text-3xl font-medium">Deposit money</h3>
								<p className="text-lg text-gray-300">
									Deposit money into the savings pool
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-3xl font-medium">
									Earn interest on deposits
								</h3>
								<p className="text-lg text-gray-300">
									Farming strategies are used to earn interest with pool money
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-3xl font-medium">Win prizes</h3>
								<p className="text-lg text-gray-300">
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
