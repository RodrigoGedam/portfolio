import { HiDownload } from 'react-icons/hi';

export default function Hero() {
	return (
		<section
			id="hero"
			className="rounded-tr-[150px] bg-preto text-branco">
			<div className="container mx-auto mx-w-4xl p-2 py-12 flex flex-col md:flex-row">
				<div className="basis-1/2">
					<h1 className="mb-6 text-center md:text-left">
						<span className="font-handwriting block text-3xl text-center md:text-left">
							Olá, me chamo
						</span>
						<span className="font-headline text-5xl font-semibold">Rodrigo </span>
						<span className="font-headline text-5xl font-light text-vermelho">
							Gedam
						</span>
					</h1>
					<h2 className="font-semibold flex items-center gap-2 justify-center md:justify-start">
						<div className="h-1 w-12 rounded-full bg-red-700" />
						Desenvolvedor React.Js Front-End
					</h2>
					<p className="text-gray-400 my-6 text-center md:text-left">
						Desenvolvedor Front-End React apaixonado pro criar experiências interativas
						e responsivas.
					</p>

					<div className="flex items-center justify-center md:justify-start gap-2">
						<a
							href="#"
							target="_blank"
							className="button text-gray-600 hover:text-gray-900 flex items-center gap-2">
							<HiDownload />
							Acesse meu CV
						</a>
					</div>
				</div>
				<div className="basis-1/2 overflow-hidden"></div>
			</div>
		</section>
	);
}
