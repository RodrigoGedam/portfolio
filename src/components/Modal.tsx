import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProjectButton from "./ProjectButton";

interface ModalProps {
	description: string;
	title: string;
	linkGit: string;
	linkDeploy: string;
	warning: string;
	reference: string;
}

export default function Modal({ description, title, linkGit, linkDeploy, warning, reference }: ModalProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="inset-0 py-1 flex items-center justify-center">
				<button
					type="button"
					onClick={toggleModal}
					className="rounded-md px-1 text-sm font-medium text-white underline hover:bg-opacity-30 hover:bg-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					Mais informações
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={toggleModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-80" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="flex justify-between">
										<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
											{title}
										</Dialog.Title>
										<button onClick={toggleModal}>X</button>
									</div>
									<div className="mt-2">
										{warning !== "x" && <p className="text-sm text-red-600">*AVISO : {warning}</p>}
										<p className="text-sm text-gray-500">{description}</p>
										{reference !== "x" && (
											<p className="text-sm flex justify-center">
												<a
													href={reference}
													target="_blank"
													rel="noopener noreferrer"
													className="text-black hover:text-blue-400">
													Link do projeto original
												</a>
											</p>
										)}
									</div>
									<div className="mt-4 flex justify-evenly">
										<ProjectButton title="Deploy" git={false} projectLink={linkDeploy} />
										<ProjectButton title="Github" git={true} projectLink={linkGit} />
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
