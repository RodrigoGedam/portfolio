import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ toPage, children }) {
	return (
		<li className="nav-item">
			<Link to={toPage} className={`nav-link ${styles.link}`}>
				{children}
			</Link>
		</li>
	);
}
