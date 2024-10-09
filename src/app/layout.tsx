import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const font = GeistSans;

export const metadata: Metadata = {
	title: "Websitein - Solusi Website Keren dan Modern",
	description: "Websitein menawarkan solusi website keren, modern, dan cepat. Buat website profesional dengan mudah bersama kami.",
	keywords: "website keren, solusi website, buat website, website modern, website cepat, Websitein, jasa website, jasa website jogja",
	authors: [
		{
			name: "Websitein",
			url: "https://websitein-dev.vercel.app",
		}
	],
	robots: "index, follow",
	openGraph: {
		type: "website",
		url: "https://websitein-dev.vercel.app",
		title: "Websitein - Solusi Website Keren dan Modern",
		description: "Solusi mudah membuat website keren dan modern bersama Websitein. Layanan website cepat dan profesional.",
		images: [
			{
				url: "/assets/preview.png",
				width: 800,
				height: 600,
				alt: "Websitein Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@Websitein",
		title: "Websitein - Solusi Website Keren dan Modern",
		description: "Solusi mudah membuat website keren dan modern bersama Websitein. Layanan website cepat dan profesional.",
		images: "/assets/preview.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="icon" href="/assets/logo.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Websitein" />
				<meta name="google-site-verification" content="nbDh5VVayQYp3CDTPBHPx1f2WY9Ye4mDmo4K0aVAON4" />
			</head>
			<body className={font.className}>
				{children}
				<FloatingCTA />
			</body>
		</html>
	);
}
