import Banner from './components/Banner';
import Details from './components/Details';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Features from './components/Features';

export default function Home() {
	return (
		<main>
			<Banner />
			<Features />
			<Details />
			<Gallery />
			<AboutUs />
		</main>
	);
}
