import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FrequentlyAsked";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<About />
			<ServicesSection />
			<Benefits />
			<Pricing />
			<FAQSection />
			<Footer />
		</>
	);
}
