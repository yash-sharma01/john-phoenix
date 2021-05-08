import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Testimonials from "./components/Testimonials/Testimonials";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			{/* Navbar */}
			<Navbar />

			{/* Hero Section */}
			<HeroSection />

			{/* Skills */}
			<Skills />

			{/* Portfolio / Work */}
			<Portfolio />

			{/* About me */}
			<About />

			{/* Work-experience */}
			<Experience />

			{/* Testimonials */}
			<Testimonials />

			{/* Blogs */}
			<Blogs />

			{/* Contact */}
			<Contact />

			{/* Footer */}
			<Footer />
		</>
	);
}

export default App;
