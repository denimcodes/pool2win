
import Head from "next/head";
import Link from "next/link";

export default function DepositPage() {
	return (
		<div>
			<Head>
				<title>Pool2Win | Deposit</title>
			</Head>
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
								<ul className="flex gap-8 text-gray-400">
									<li className="font-medium uppercase">
										<Link href="/app/deposit">
											<a>Deposit</a>
										</Link>
									</li>
									<li className="font-medium text-white uppercase">
										<Link href="/app/winners">
											<a>Winners</a>
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
          <p className="text-xl">No winners yet</p>
        </main>
			</div>
		</div>
	);
}
