import ProjectsCards from '../../components/ProjectsCards';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';

export default function Projects() {
	return (
		<section className={styles.projectsSection}>
			<h1 className={styles.projectsSectionHeader}>Alguns dos meus projetos</h1>
			<div className={styles.projectsGrid}>
				{projects.map((project, index) => (
					<ProjectsCards 
					toProject={project.projectLink}
					toGit={project.projectGit}
					image={project.image}
					title={project.title}
					key={index}
					/>
				))}
			</div>
		</section>
	);
}
