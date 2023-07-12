import { useState } from 'react';
import { TbHexagonLetterR } from 'react-icons/tb';
import { Link } from 'react-scroll';

export default function Navbar() {
	const [menuHidden, setMenuHidden] = useState(true);

	const isHidden = () => {
		return setMenuHidden(!menuHidden);
	};

	return (
		<>
			<nav className="fixed text-2xl z-50 w-full bg-white/90 dark:bg-gray-900/60 backdrop-blur navbar shadow-lg shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
				<div className="xl:container m-auto px-6 md:px-12 lg:px-6">
					<div className="flex flex-wrap items-center justify-between gap-6 md:py-2 md:gap-0 lg:py-3">
						<div className="w-full items-center flex justify-between lg:w-auto">
							<Link
								className="relative z-10 text-branco cursor-pointer"
								to="hero"
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
								aria-label="logo">
								<TbHexagonLetterR />
							</Link>
							<button
								onClick={isHidden}
								className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
								<div
									aria-hidden="true"
									className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
								<div
									aria-hidden="true"
									className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
							</button>
						</div>
						<div
							className={`navmenu w-full flex-wrap justify-end items-center mb-8 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex lg:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0 ${
								menuHidden ? 'hidden' : ''
							}`}>
							<div className="text-gray-600 dark:text-gray-300 lg:pr-4">
								<ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
									<li className="rounded-lg cursor-pointer hover:bg-gray-700">
										<Link
											onClick={isHidden}
											to="about"
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
											<span className="text-lg text-branco hover:text-white">
												About
											</span>
										</Link>
									</li>
									<li className="rounded-lg cursor-pointer hover:bg-gray-700">
										<Link
											onClick={isHidden}
											to="skills"
											spy={true}
											smooth={true}
											offset={-80}
											duration={500}
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
											<span className="text-lg text-branco hover:text-white">
												Skills
											</span>
										</Link>
									</li>
									<li className="rounded-lg cursor-pointer hover:bg-gray-700">
										<Link
											onClick={isHidden}
											to="projects"
											spy={true}
											smooth={true}
											offset={-80}
											duration={500}
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
											<span className="text-lg text-branco hover:text-white">
												Projetos
											</span>
										</Link>
									</li>
									<li className="rounded-lg cursor-pointer hover:bg-gray-700">
										<Link
											onClick={isHidden}
											to="cursos"
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
											<span className="text-lg text-branco hover:text-white">
												Cursos
											</span>
										</Link>
									</li>
									<li className="rounded-lg cursor-pointer hover:bg-gray-700">
										<Link
											onClick={isHidden}
											to="contact"
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
											<span className="text-lg text-branco hover:text-white">
												Contato
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className="h-2 bg-preto"></div>
		</>
	);
}
