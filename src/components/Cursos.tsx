import { FaFreeCodeCamp } from "react-icons/fa";
import { HiCommandLine } from "react-icons/hi2";
import { SiUdemy } from "react-icons/si";

export default function Cursos() {
	const cursos = [
		{
			title: "FreeCodeCamp",
			description: "Responsive Web Design",
			icon: <FaFreeCodeCamp className="h-12 w-12" />,
			link: "https://freecodecamp.org/certification/RodrigoSinghGedam/responsive-web-design",
		},
		{
			title: "Alura",
			description: "Cursos completos na plataforma Alura",
			icon: <HiCommandLine className="h-12 w-12" />,
			link: "http://cursos.alura.com.br/user/rogedam/fullCertificate/b96268b5dd9bf2145c7f3c8880c1606a",
		},
		{
			title: "Udemy",
			description: "Curso Web Design",
			icon: <SiUdemy className="h-12 w-12" />,
			link: "https://ude.my/UC-d4b0e1e8-fcae-418b-908a-44663834d86e/",
		},
	];

	return (
		<section
			id="cursos"
			className="container mx-auto my-12 max-w-4xl p-4">
			<div className="p-4 text-center">
				<p className="text-sm font-semibold uppercase text-red-900">O que eu faço de melhor</p>
				<h2 className="mb-2 font-bold text-vermelho">
					<span className="mr-2 font-headline text-3xl">Cursos e</span>
					<span className="font-handwriting text-4xl">Certificados</span>
				</h2>
			</div>
			<div className="mt-6 flex flex-col gap-2 md:flex-row">
				{cursos.map((curso) => (
					<div
						className="basis-1/3 rounded-lg bg-red-700 p-4 text-branco"
						key={`curso-${curso.title}`}>
						<div className="mb-2">{curso.icon}</div>
						<h3 className="text-xl font-bold">{curso.title}</h3>
						<p className="text-sm">{curso.description}</p>
						<div className="flex justify-center mt-2">
							<a
								href={curso.link}
								target="_blank"
								className="text-sm text-white cursor-pointer bg-red-400 bg-opacity-60 rounded px-1 py-1 hover:underline hover:bg-white hover:text-black">
								Certificado
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
