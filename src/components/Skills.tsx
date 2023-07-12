import { HiCode } from 'react-icons/hi';

export default function Skills() {
	const hardSkills = [
		{
			name: 'HTML5/CSS3',
			icon: 'images/html.svg',
			level: 90,
		},
		{
			name: 'JavaScript',
			icon: 'images/js.svg',
			level: 90,
		},
	];

	const softSkills = [
		{
			name: 'React.js',
			icon: 'images/react.svg',
			level: 75,
		},
		{
			name: 'Git/Github',
			icon: 'images/git.svg',
			level: 75,
		},
	];

	return (
		<section id="skills" className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
			<div className="container mx-auto max-w-4xl p-4 py-12">
				<div className="relative mb-4 p-4 text-center">
					<h2 className="relative z-40 mb-2 font-bold">
						<span className="mr-2 font-headline text-3xl text-gray-800">Skills</span>
					</h2>
					<p className="relative text-lg text-gray-700">
						Front-End Developer | React.js | Typescript | JavaScript | Git
					</p>
					<div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-red-400/10" />
				</div>
				<div className="flex flex-col gap-8 md:flex-row">
					<div className="basis-1/2">
						<h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
							<HiCode className="h-8 w-8 text-vermelho" />
							Hard Skills
						</h3>
						<div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
							{hardSkills.map((skill, index) => (
								<div
									key={`skill-${index}`}
									className="flex flex-row items-center gap-2 md:flex-col md:items-start">
									<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-branco p-2">
										<img
											src={skill.icon}
											alt={skill.name}
											className="h-10 w-10 rounded"
										/>
									</div>
									<div className="w-full flex-grow">
										<h4 className="font-headline text-gray-900">
											{skill.name}
										</h4>
										<div className="h-2.5 w-full rounded-full bg-branco">
											<div
												className="h-2.5 rounded-full bg-blue-600"
												style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="rounded border-4 border-gray-500" />
					<div className="basis-1/2">
						<h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
							<HiCode className="h-8 w-8 text-vermelho" />
							Soft Skills
						</h3>
						<div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
							{softSkills.map((skill, index) => (
								<div
									key={`skill-${index}`}
									className="flex flex-row items-center gap-2 md:flex-col md:items-start">
									<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-branco p-2">
										<img
											src={skill.icon}
											alt={skill.name}
											className="h-10 w-10 rounded"
										/>
									</div>
									<div className="w-full flex-grow">
										<h4 className="font-headline text-gray-900">
											{skill.name}
										</h4>
										<div className="h-2.5 w-full rounded-full bg-branco">
											<div
												className="h-2.5 rounded-full bg-blue-600"
												style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="relative mt-4 p-4 text-center">
					<h4 className="relative z-40 mb-2 font-bold">
						<span className="mr-2 font-headline text-3xl text-gray-800">Learning</span>
					</h4>
					<p className="relative text-xl text-gray-800">
						Front-End Developer | React.js | Typescript | JavaScript | Git
					</p>
				</div>
			</div>
		</section>
	);
}
