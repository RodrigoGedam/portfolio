import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function PaginaBase() {
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
}
