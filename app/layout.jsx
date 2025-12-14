import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
// import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Nahid Islam | Portofolio",

    description:
		"My name is Nahid Islam, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

    author: "Alvalen Shafelbilyunazra",
    siteUrl: "https://www.alvalens.my.id",
    applicationName: "Nahid Islam",

    keywords: [
		"alvalens",
		"alvalen",
		"alvalen shafel",
		"shafel",
		"alvalen shafelbilyunazra",
		"alvalen shafel bilyunazra",
		"bloodfallen",
		"alvalen porto",
		"alvalen um",
	],

    openGraph: {
		type: "website",
		url: "https://nahid-islam.vercel.app/",
		title: "Nahid Islam | Portofolio",
		site_name: "Nahid Islam | Portofolio",
		description: "My name is Nahid Islam, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image.jpeg",
				alt: "Nahid Islam Portofolio",
			},
		],
		site_name: "Nahid Islam | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
