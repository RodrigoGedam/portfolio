import About from './components/About';
import Contact from './components/Contact';
import Cursos from './components/Cursos';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
	return (
		<>
			<main>
				<Navbar />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Cursos />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
