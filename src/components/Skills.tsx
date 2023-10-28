import { BsGit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";

export default function Skills() {
	const hardSkills = [
		{
			name: "HTML5/CSS3",
			icon: <ImHtmlFive className="h-8 w-8 text-orange-600" />,
			level: 100,
		},
		{
			name: "JavaScript",
			icon: <SiJavascript className="h-8 w-8 text-yellow-400" />,
			level: 100,
		},
		{
			name: "React.js",
			icon: <FaReact className="h-8 w-8 text-blue-800" />,
			level: 90,
		},
		{
			name: "Git/Github",
			icon: <BsGit className="h-8 w-8" />,
			level: 85,
		},
		{
			name: "Typescript",
			icon: <SiTypescript className="h-8 w-8 text-blue-600" />,
			level: 80,
		},
	];

	const softSkills = [
		{
			name: "Tailwind",
			icon: <SiTailwindcss className="h-8 w-8" />,
			level: 75,
		},
		{
			name: "NextJS",
			icon: <SiNextdotjs className="h-8 w-8" />,
			level: 50,
		},
		{
			name: "Python",
			icon: <TbBrandPython className="h-8 w-8" />,
			level: 15,
		},
	];

	return (
		<section
			id="skills"
			className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
			<div className="container mx-auto p-4 py-12">
				<div className="relative mb-4 p-4 text-center">
					<h2 className="relative z-40 mb-2 font-bold">
						<span className="mr-2 font-headline text-3xl text-gray-800">Skills</span>
					</h2>
					<p className="relative text-lg text-gray-700">Front-End Developer | React.js | Typescript | JavaScript | Git</p>
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
									<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-branco p-2">{skill.icon}</div>
									<div className="w-full flex-grow">
										<h4 className="font-headline text-gray-900">{skill.name}</h4>
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
									<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-branco p-2">{skill.icon}</div>
									<div className="w-full flex-grow">
										<h4 className="font-headline text-gray-900">{skill.name}</h4>
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
			</div>
		</section>
	);
}
