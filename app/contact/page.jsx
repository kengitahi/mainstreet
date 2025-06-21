'use client';

import { motion } from 'framer-motion';

import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col flex-wrap justify-between max-w-(--breakpoint-xl) p-4 mx-auto mt-20 services'
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h2 className='mb-4 text-5xl font-bold leading-tight capitalize font-lexend'>
					Get in Touch
				</h2>
				<p className='mb-8 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>
					Need a quote? Have a question or need a clarification? Send
					us a message using the form below and we will get back to
					you shortly.
				</p>
			</motion.div>

			<ContactForm />
		</motion.main>
	);
}
