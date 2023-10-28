import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";

export default function Contact() {
	const contacts = [
		{
			name: "WhatsApp",
			description: "+55 11 97453-6075",
			icon: <FaWhatsapp className="h-10 w-10" />,
		},
		{
			name: "Email",
			description: "rodrigo.gedam@gmail.com",
			icon: <HiOutlineEnvelope className="h-10 w-10" />,
		},
		{
			name: "São Paulo - SP",
			description: "Mandaqui - ZN",
			icon: <HiOutlineMapPin className="h-10 w-10" />,
		},
	];

	return (
		<section
			id="contact"
			className="bg-gray-300 rounded-bl-[80px] text-preto">
			<div className="container mx-auto max-w-6xl text-center p-4 py-8">
				<div className="mb-6">
					<h2 className="z-40 mb-2">
						<span className="mr-2 font-headline text-3xl font-semibold">Fale</span>
						<span className="font-handwriting text-4xl">Comigo</span>
					</h2>
					<p className="text-sm">Entre em contato por email ou WhatsApp, com certeza irei poder te ajudar.</p>
				</div>

				<div className="flex flex-col items-center justify-center gap-10 md:flex-row md:space-x-8">
					{contacts.map((contact, index) => (
						<div
							key={`contact-${index}`}
							className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4">
							{contact.icon}
							<div>
								<p className="font-headline font-semibold">{contact.name}</p>
								<p className="text-gray-900 underline underline-offset-2">{contact.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
