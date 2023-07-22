import projects from '../data/projects.json';
import Modal from './Modal';
import ProjectButton from './ProjectButton';

export default function Projects() {
	return (
		<>
			<section id="projects" className="rounded-tl-[80px] bg-gradient-to-tl from-preto to-gray-900 text-white md:rounded-tl-[180px]">
				<div className="container mx-auto max-w-4xl p-4 py-12">
					<div className="relative p-4 text-center">
						<h2 className="relative z-40 mb-2 text-white">
							<span className="mr-2 font-headline text-3xl font-semibold">Projetos &</span>
							<span className="font-handwriting text-4xl">Portfólio</span>
						</h2>
						<p className="relative text-sm text-gray-400">
							Alguns dos projetos pessoais e que já realizei ao longo da minha trajetória como programador front-end.
						</p>
						<div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-red-100/10" />
					</div>
					<div className="mt-6 flex flex-wrap justify-evenly gap-10">
						{projects.map((project, index) => (
							<div>
								<div className="bg-tertiary rounded-2xl sm:w-[360px] w-full">
									<div key={`project-${index}`} className="relative w-full h-[230px]">
										<img src={project.image} alt="project image" className="w-full h-full object-cover rounded-2xl" />
									</div>
									<div className="mt-5 flex justify-evenly gap-x-4 items-center">
										<h3 className="text-white font-bold text-lg">{project.title}</h3>
										<ProjectButton git={false} title="Deploy" projectLink={project.link.deploy} />
										<ProjectButton git={true} title="GitHub" projectLink={project.link.git} />
									</div>
									<p className="flex mt-2 text-secondary text-[14px]">
										{project.description.home}
										<Modal
											warning={project.description.warning}
											description={project.description.modal}
											title={project.title}
											linkGit={project.link.git}
											linkDeploy={project.link.deploy}
										/>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
		</>
	);
}
