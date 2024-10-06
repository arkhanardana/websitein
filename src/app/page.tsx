import { HeroSection } from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import Benefits from "@/components/Benefits";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<About />
			<ServicesSection />
			<Benefits />
		</>
	);
}
