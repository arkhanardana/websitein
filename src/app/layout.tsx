import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const font = GeistSans;

export const metadata: Metadata = {
	title: "Websitein - Solusi Website Keren dan Modern",
	description: "Websitein adalah platform yang menyediakan solusi pembuatan website yang keren, modern, dan responsif dengan fitur-fitur lengkap.",
	keywords: "website, desain website, solusi website, website modern, responsif, platform website, websitein, websitein dev, jasa website jogja",
	authors: { name: "Websitein", url: "https://websitein.vercel.app" },
	robots: "index, follow",
	openGraph: {
		title: "Websitein - Solusi Website Keren dan Modern",
		description: "Platform yang menyediakan solusi pembuatan website yang keren, modern, dan responsif dengan fitur-fitur lengkap.",
		url: "https://websitein.vercel.app",
		type: "website",
		images: [
			{
				url: "/assets/preview.png",
				width: 800,
				height: 600,
				alt: "Logo Websitein",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@websitein",
		title: "Websitein - Solusi Website Keren dan Modern",
		description: "Solusi pembuatan website yang keren, modern, dan responsif.",
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
			<link rel="icon" href="/assets/logo.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className={font.className}>
				{children}
				<FloatingCTA />
			</body>
		</html>
	);
}
