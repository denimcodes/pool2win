import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>NextJs startert template</title>
			</Head>
			<main>
				<div className="h-screen grid place-content-center">
					<h1 className="text-5xl text-purple-700">
						NextJs + Typescript + Tailwind template
					</h1>
				</div>
			</main>
		</div>
	);
};

export default Home;
