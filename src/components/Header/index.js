import Button from '../Button';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.cabecalho}>
			<ul className="nav justify-content-center">
				<Button toPage="./">
					Início
				</Button>
				<Button toPage="./projects">
					Projetos
				</Button>
				<Button toPage="./contact">
					Contato
				</Button>
			</ul>
		</header>
	);
}
