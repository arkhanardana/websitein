import { HeroSection } from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import ServicesSection from "@/components/Services";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<About />
			<ServicesSection />
		</>
	);
}
