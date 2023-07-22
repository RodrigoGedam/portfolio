import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProjectButton from './ProjectButton';

interface ModalProps {
	description: string;
	title: string;
	linkGit: string;
	linkDeploy: string;
	warning: string;
}

export default function Modal({ description, title, linkGit, linkDeploy, warning }: ModalProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="inset-0 flex items-center justify-center">
				<button
					type="button"
					onClick={toggleModal}
					className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					+
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
										{warning !== 'x' ? <p className="text-sm text-red-600">*AVISO : {warning}</p> : ''}
										<p className="text-sm text-gray-500">{description}</p>
										<p className="text-sm flex justify-center">Link do projeto</p>
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
