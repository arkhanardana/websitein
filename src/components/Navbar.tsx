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
		{ href: "/", label: "About" },
		{ href: "/", label: "Services" },
		{ href: "/", label: "Projects" },
		{ href: "/", label: "Pricing" },
		{ href: "/", label: "Testimonials" },
		{ href: "/", label: "FAQ" },
	];

	const logo = {
		url: "/assets/logo.jpeg",
	};

	return (
		<nav className="my-5 sticky top-0 bg-white" ref={navRef}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link href="/" className="text-2xl font-bold text-blue-600">
							<Image src={logo.url} alt="logo-websitein" width={70} height={100} loading="lazy" />
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						{menuItems.map((item) => (
							<Link
								key={item.href}
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
						{menuItems.map((item) => (
							<Link
								key={item.href}
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
