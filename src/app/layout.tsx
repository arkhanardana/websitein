import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const font = GeistSans;

export const metadata: Metadata = {
	title: "Websitein",
	description: "Solusi Website Keren dan Modern",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/assets/logo.jpeg" className="mix-blend-difference" />
			<body className={font.className}>{children}</body>
		</html>
	);
}
