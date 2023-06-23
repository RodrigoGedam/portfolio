import Button from '../../components/Button';
import Footer from '../../components/Footer';
import styles from './NotFound.module.css';

export default function NotFound() {
	return (
		<>
			<section className={styles.container}>
				<h2>Ops!</h2>
				<p>O conteúdo que você procura não foi encontrado !</p>
				<p>Clique no botão para voltar ao início.</p>
				<Button button={true} toPage="./">
					Início
				</Button>
			</section>
			<Footer />
		</>
	);
}
