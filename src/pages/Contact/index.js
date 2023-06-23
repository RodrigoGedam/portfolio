import styles from './Contact.module.css';

export default function Contact() {
	return (
		<section id="contact" className={styles.contactSection}>
			<div className={styles.contactSectionHeader}>
				<h2>Para entrar em contato...</h2>
				<p>How do you take your coffee?</p>
			</div>
			<div className={styles.contactLinks}>
				<a
					href="https://github.com/RodrigoGedam"
					target="_blank"
					className={`btn ${styles.contactDetails}`} rel="noreferrer">
					<i className="fab fa-github"></i> GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/rodrigogedam/"
					target="_blank"
					className={`btn ${styles.contactDetails}`} rel="noreferrer">
					<i className="fab fa-linkedin"></i> Linkedin
				</a>
				<a href="#contact" className={`btn ${styles.contactDetails} ${styles.contactEmail}`}>
					<i className="fas fa-at"></i> rogedam@gmail.com
				</a>
			</div>
		</section>
	);
}
