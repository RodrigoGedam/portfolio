import { HiCommandLine, HiComputerDesktop, HiDevicePhoneMobile } from 'react-icons/hi2';

export default function Cursos() {
	const cursos = [
		{
			title: 'Web',
			description:
				'Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.',
			icon: <HiComputerDesktop className="h-12 w-12" />,
		},
		{
			title: 'Sistemas',
			description: 'Desenvolvimento de sistemas e APIs REST com Node.js.',
			icon: <HiCommandLine className="h-12 w-12" />,
		},
		{
			title: 'Mobile',
			description: 'Desenvolvimento de aplicativos Android e iOS.',
			icon: <HiDevicePhoneMobile className="h-12 w-12" />,
		},
	];

	return (
		<section id='cursos' className="container mx-auto my-12 max-w-4xl p-4">
			<div className="p-4 text-center">
				<p className="text-sm font-semibold uppercase text-red-900">
					O que eu faço de melhor
				</p>
				<h2 className="mb-2 font-bold text-vermelho">
					<span className="mr-2 font-headline text-3xl">Cursos e</span>
					<span className="font-handwriting text-4xl">Certificados</span>
				</h2>
			</div>
			<div className="mt-6 flex flex-col gap-2 md:flex-row">
				{cursos.map((curso, index) => (
					<div
						className="basis-1/3 rounded-lg bg-red-700 p-4 text-branco"
						key={`curso-${index}`}>
						<div className="mb-2">{curso.icon}</div>
						<h3 className="text-xl font-bold">{curso.title}</h3>
						<p className="text-sm">{curso.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
