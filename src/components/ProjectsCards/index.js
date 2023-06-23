import styles from './ProjectsCards.module.css';

export default function ProjectsCards({ toProject, toGit, image, title }) {
	return (
		<>
			<div className={`${styles.project} ${styles.projectTile}`}>
				<img className={styles.projectImage} src={image} alt="project" />
				<a
					href={toProject}
					target="_blank"
					rel="noreferrer"
					className={styles.projectLink}>{title}</a>
				<a
					href={toGit}
					target="_blank"
					rel="noreferrer"
					className={styles.projectLink}>
					<i className="fab fa-github"></i>Git
				</a>
			</div>
		</>
	);
}
