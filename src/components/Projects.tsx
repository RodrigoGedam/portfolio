import { BsGithub } from 'react-icons/bs';

export default function Projects() {
	const projects = [
		{
			title: 'Previsão',
			description:
				'Projeto de previsão de tempo utilizando a API OpenWeather. Nesse projeto foi usado React, Typescript e Tailwind.',
			image: '../../public/images/weather-forecast.png',
			linkDeploy: 'https://weather-forecast-rodrigogedam.vercel.app/',
			linkGit: 'https://github.com/RodrigoGedam/weather-forecast',
			colSpan: 'col-span-1',
		},
		{
			title: 'Jogo da Velha',
			description: 'Projeto de Jogo da Velho usando React e JavaScript.',
			image: '../../public/images/jogo-da-velha.png',
			linkDeploy: 'https://tic-tac-toe-rodrigogedam.vercel.app/',
			linkGit: 'https://github.com/RodrigoGedam/tic-tac-toe',
			colSpan: 'col-span-1 md:col-span-2',
		},
		{
			title: 'Cardapio',
			description:
				'Projeto de um cardápio de restaurante utilizando React, Typescript e Sass',
			image: '../../public/images/cardapio-restaurante.png',
			linkDeploy: 'https://restaurante-cardapio-rodrigogedam.vercel.app/',
			linkGit: 'https://github.com/RodrigoGedam/restaurante-cardapio',
			colSpan: 'col-span-1',
		},
	];

	return (
		<>
			<section
				id="projects"
				className="rounded-tl-[80px] bg-gradient-to-tl from-preto to-gray-900 text-white md:rounded-tl-[180px]">
				<div className="container mx-auto max-w-4xl p-4 py-12">
					<div className="relative p-4 text-center">
						<h2 className="relative z-40 mb-2 text-white">
							<span className="mr-2 font-headline text-3xl font-semibold">
								Projetos &
							</span>
							<span className="font-handwriting text-4xl">Portfólio</span>
						</h2>
						<p className="relative text-sm text-gray-400">
							Alguns dos projetos pessoais e que já realizei ao longo da minha
							trajetória como programador front-end.
						</p>
						<div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-red-100/10" />
					</div>
					<div className="mt-6 flex flex-wrap justify-evenly gap-10">
						{projects.map((project, index) => (
							<div>
								<div className="bg-tertiary rounded-2xl sm:w-[360px] w-full">
									<div
										key={`project-${index}`}
										className="relative w-full h-[230px]">
										<img
											src={project.image}
											alt="project image"
											className="w-full h-full object-cover rounded-2xl"
										/>
									</div>
									<div className="mt-5 flex justify-evenly gap-x-4 items-center">
										<h3 className="text-white font-bold text-lg">
											{project.title}
										</h3>
										<div
											className="black-gradient w-20 h-8 rounded-full flex justify-evenly items-center cursor-pointer bg-gray-800 hover:bg-gray-600"
											onClick={() =>
												window.open(project.linkDeploy, '_blank')
											}>
											Deploy
										</div>
										<div
											className="black-gradient w-20 h-8 rounded-full flex justify-evenly items-center cursor-pointer bg-gray-800 hover:bg-gray-600"
											onClick={() => window.open(project.linkGit, '_blank')}>
											<BsGithub />
											Github
										</div>
									</div>
									<p className="mt-2 text-secondary text-[14px]">
										{project.description}
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
