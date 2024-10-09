"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
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


	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const menuItems = [
		{ href: "#about", label: "About" },
		{ href: "#services", label: "Services" },
		{ href: "#benefit", label: "Benefits" },
		{ href: "#pricing", label: "Pricing" },
		{ href: "#faq", label: "FAQ" },
	];

	const logo = {
		url: "/assets/logo.png",
	};

	return (
		<nav
			className={`my-3 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 backdrop-blur-lg shadow-md" : "bg-white"
				}`}
			ref={navRef}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<Link href="/" className="text-2xl font-bold text-black flex items-center">
						<Image
							src={logo.url}
							alt="logo-websitein"
							width={65}
							height={80}
							loading="lazy"
						/>
						<h1 className="hidden md:flex md:text-lg md:font-normal">
							Websitein
						</h1>
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
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
					} md:hidden`}
			>
				<div className="flex justify-end p-4">
					<button
						onClick={toggleMenu}
						className="text-gray-600 py-4 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
						aria-label="Close menu"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
				<div className="px-2 pt-2 pb-3 space-y-1">
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
		</nav>
	);
}
