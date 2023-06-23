import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PaginaBase from './pages/PaginaBase';
import Projects from './pages/Projects';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<PaginaBase />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path='contact' element={<Contact />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
