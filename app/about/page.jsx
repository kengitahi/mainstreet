'use client';

import { motion } from 'framer-motion';
import ServicesCard from '@/components/cards/ServicesCard';
import ContactForm from '@/components/ui/ContactForm';

export default function About() {
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
					Welcome to MainStreet Digital!
				</h2>
				<p className='mb-4 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>
					We are a web development agency that provides custom web
					development and digital marketing solutions for growing
					businesses.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className='max-w-[800px] mx-auto p-4'
			>
				<img
					src='/imgs/ui/about.jpg'
					alt='About MainStreet Digital'
					className='rounded-lg shadow-lg'
				/>
			</motion.div>

			<div className='py-6'>
				<p className='mb-4 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>
					We help businesses turn ideas into scalable, user-friendly,
					and revenue-generating websites and web apps.
				</p>
				<p className='mb-4 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>
					Whether you need a sleek{' '}
					<span className='font-semibold'>
						e-commerce store, a custom CRM, or an automated booking
						system{' '}
					</span>
					we'll deliver a solution tailored to your business goals.
				</p>
			</div>

			<h3 className='mb-1 text-3xl font-bold leading-tight capitalize font-lexend'>
				How We Can Help Your Business
			</h3>
			<ServicesCard
				id=''
				title='Custom Web Applications'
				href='/services'
				category='Web Development'
				icon='development.png'
				horizontal
			>
				<ul className='text-gray-600 list-disc list-inside md:text-lg lg:text-xl font-inter'>
					<li>
						Develop fast, scalable web applications that grow with
						your business
					</li>
					<li>
						Automate workflows to save time and reduce operational
						costs
					</li>
					<li>Ensure secure and optimized database structures</li>
				</ul>
			</ServicesCard>

			<ServicesCard
				id=''
				title='Website Development & Optimization'
				href='/services'
				category='Web Development'
				icon='web-development.png'
				horizontal
				odd
			>
				<ul className='text-gray-600 list-disc list-inside md:text-lg lg:text-xl font-inter'>
					<li>
						Build responsive, high-performance websites that attract
						& retain customers
					</li>
					<li>
						Improve SEO and page speed to boost your search rankings
					</li>
					<li>
						Seamlessly integrate payment gateways (including Stripe,
						PayPal, and M-pesa), CRM tools, and third-party APIs
					</li>
				</ul>
			</ServicesCard>

			<ServicesCard
				id=''
				title='Ongoing Maintenance & Support'
				href='/services'
				category='Business Support'
				icon='maintenance.png'
				horizontal
			>
				<ul className='text-gray-600 list-disc list-inside md:text-lg lg:text-xl font-inter'>
					<li>
						Keep your site secure & up to date with regular
						maintenance
					</li>
					<li>
						Boost performance and resolve technical issues
						proactively
					</li>
					<li>Provide reliable, on-demand technical support</li>
				</ul>
			</ServicesCard>

			{/* <div className='py-6'>
				<h3 className='mb-2 text-3xl font-bold leading-tight capitalize font-lexend'>
					Tech Stack & Tools
				</h3>
				<ul className='text-gray-600 list-disc list-inside md:text-lg lg:text-xl font-inter'>
					<li>PHP 8.x</li>
					<li>Laravel</li>
					<li>MySQL/PostgreSQL</li>
					<li>JavaScript (Vue.js/Next.js)</li>
					<li>HTML5/CSS3 (Tailwind CSS)</li>
				</ul>
			</div> */}

			<div className='py-6'>
				<h3 className='mb-2 text-3xl font-bold leading-tight capitalize font-lexend'>
					Let's Build Something Amazing!
				</h3>
				<p className='my-4 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>
					We offer an initial consultation to understand your goals
					and explore the best solutions for your project.
				</p>
				<p className='mb-4 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>
					Send us a message using the form below and we will get back
					to you shortly.
				</p>

				<ContactForm />
			</div>
		</motion.main>
	);
}
