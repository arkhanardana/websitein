"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const navRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => setIsOpen(!isOpen);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const menuItems = [
		{ href: "#about", label: "About" },
		{ href: "#services", label: "Services" },
		{ href: "#benefit", label: "Benefits" },
		{ href: "#pricing", label: "Pricing" },
		{ href: "/", label: "Testimonials" },
		{ href: "/", label: "FAQ" },
	];

	const logo = {
		url: "/assets/logo.png",
	};

	return (
		<nav className="my-3 sticky top-0 bg-white z-50" ref={navRef}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<Link href="/" className="text-2xl font-bold text-black flex items-center">
						<Image src={logo.url} alt="logo-websitein" width={65} height={80} loading="lazy" />
						<h1 className="hidden md:flex md:text-lg md:font-normal">Websitein</h1>
					</Link>
					<div className="hidden md:flex items-center space-x-4">
						{menuItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
							>
								{item.label}
							</Link>
						))}
					</div>
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							aria-label={isOpen ? "Close menu" : "Open menu"}
						>
							{isOpen ? (
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{menuItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
