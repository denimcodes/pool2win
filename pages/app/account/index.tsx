import Link from "next/link";

export default function AccountPage() {
	return (
		<div className="text-white bg-dark">
			<div className="h-screen">
				<header>
					<div className="container max-w-5xl py-8 mx-auto">
						<div className="flex items-center justify-between">
						<h1 className="text-3xl font-medium uppercase cursor-pointer font-DMSans">
							<Link href="/">
								<a>Pool2Win</a>
							</Link>
						</h1>
							<nav>
								<ul className="flex gap-8">
									<li className="font-medium text-gray-400 uppercase">
										<Link href="/app/deposit">
											<a>Deposit</a>
										</Link>
									</li>
									<li className="font-medium uppercase">
										<Link href="/app/account">
											<a>Account</a>
										</Link>
									</li>
								</ul>
							</nav>
							<button className="flex items-center justify-center gap-3 py-3 font-medium uppercase bg-orange-600 rounded-md white px-7">
								Connect
							</button>
						</div>
					</div>
				</header>
				<main className="grid h-2/3 place-content-center">
					<div className="space-y-7 w-96">
						<div className="flex items-center justify-between">
							<p className="text-2xl font-bold">Amount:</p>
							<p className="text-lg font-medium text-gray-200">1000 USDC</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-2xl font-bold">Prizes won:</p>
							<p className="text-lg font-medium text-gray-200">90 USDC</p>
						</div>
						<button className="flex items-center justify-center w-full gap-3 py-3 mt-8 font-medium uppercase bg-orange-600 rounded-md white px-7">
							Withdraw
						</button>
					</div>
				</main>
			</div>
		</div>
	);
}
