export default function About() {
	return (
		<section
			id="about"
			className="container mx-auto my-4 max-w-5xl p-4">
			<div className="relative p-4 text-center">
				<h2 className="text-vermelho font-bold relative z-10">
					<span className="mr-2 font-headline text-3xl">Sobre</span>
					<span className="font-handwriting text-4xl">Mim</span>
				</h2>
				<p className="realtive md:text-lg text-sm text-gray-600">
					Olá! Sou um desenvolvedor front-end apaixonado por criar experiências digitais cativantes. Minha
					jornada no mundo do desenvolvimento web começou com uma mente curiosa e o desejo de construir
					interfaces amigáveis que deixem uma impressão duradoura.
				</p>
				<div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-red-100/40" />
			</div>
			<div className="relative mx-auto mt-20 max-w-lg">
				<div className="relative bg-red-100 w-full rounded-lg p-4 ps-20 md:h-64 md:ps-48">
					<div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
						<p className="font-handwriting text-lg font-bold">Olá,</p>
						<p>
							<span className="mr-1">Meu nome é</span>
							<span className="font-headline font-bold uppercase text-vermelho">Rodrigo</span>
							<span className="mr-1"> e essas são minhas redes.</span>
						</p>
						<table className="mt-2 w-full text-sm">
							<tbody>
								<tr>
									<td className="font-headline font-bold uppercase text-gray-500">Github:</td>
									<td>
										<a
											className="hover:underline"
											href="https://github.com/RodrigoGedam"
											target="_blank">
											/RodrigoGedam
										</a>
									</td>
								</tr>
								<tr>
									<td className="font-headline font-bold uppercase text-blue-400">Linkedin:</td>
									<td>
										<a
											className="hover:underline"
											href="https://www.linkedin.com/in/rodrigogedam/"
											target="_blank">
											/in/rodrigogedam
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-[url(/images/avatar.png)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
				</div>
			</div>
		</section>
	);
}
