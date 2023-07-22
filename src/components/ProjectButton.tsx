import { BsGithub } from 'react-icons/bs';

interface ProjectButtonProps {
	git: boolean;
	title: string;
	projectLink: string;
}

export default function ProjectButton({ git, title, projectLink }: ProjectButtonProps) {
	return (
		<button
			className="black-gradient w-20 h-8 rounded-full text-white flex justify-evenly items-center cursor-pointer bg-gray-800 hover:bg-gray-600"
			onClick={() => window.open(projectLink, '_blank')}>
			{git ? <BsGithub /> : ''}
			{title}
		</button>
	);
}
