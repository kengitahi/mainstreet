'use client';

import { motion } from 'framer-motion';
import ServicesCard from '@/components/cards/ServicesCard';

export default function Services() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col flex-wrap justify-between p-4 mx-auto mt-20 max-w-screen-xl services'
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h2 className='mb-4 text-5xl font-bold leading-tight capitalize font-lexend'>
					Our Services, <br /> Tailored for your Business.
				</h2>
				<p className='mb-8 leading-relaxed text-gray-600 md:tex-lg lg:text-xl font-inter'>
					Custom Web Development and Marketing Solutions for Growing
					Businesses.
				</p>
			</motion.div>

			<div className='services-cards-horizontal'>
				{[
					{
						id: 'webdev',
						title: 'Custom Website Design & Development',
						category: 'Web Development',
						icon: 'development.png',
						description:
							"WordPress and Laravel Websites that capture your brand's essence and provide an exceptional user experience, optimized for both desktop and mobile devices.",
					},
					{
						id: 'ecommerce',
						title: 'E-commerce and WooCommerce Solutions',
						category: 'Web Development',
						icon: 'online.png',
						description:
							'Robust WooCommerce and Laravel online stores that turn browsers into buyers, featuring secure payment gateways(including M-pesa) and inventory management systems.',
						odd: true,
					},
					{
						id: 'redesign',
						title: 'Website Redesign',
						category: 'Web Development',
						icon: 'design.png',
						description:
							'Is your website looking a bit dated? Does it no longer perform as expected? We can redesign it for you!',
					},
					{
						id: 'seo',
						title: 'Local SEO',
						category: 'SEO and Marketing',
						icon: 'quality.png',
						description:
							'Boost your visibility in local search results, helping nearby customers find your business when they need it most.',
						odd: true,
					},
					{
						id: 'email',
						title: 'Email Marketing Setup',
						category: 'SEO and Marketing',
						icon: 'web-development.png',
						description:
							'Design and implement email campaigns that nurture leads and keep your customers informed about your latest offerings.',
					},
					{
						id: 'booking',
						title: 'Online Booking & Appointment Systems',
						category: 'SEO and Marketing',
						icon: 'email.png',
						description:
							'Implement convenient scheduling tools that allow customers to book services directly through your website.',
						odd: true,
					},
					{
						id: 'migration',
						title: 'Website and Database Migration',
						category: 'Business Support',
						icon: 'server.png',
						description:
							'Seamlessly transition your existing website or database to a new platform.',
					},
					{
						id: 'maintenance',
						title: 'Website Maintenance & Support',
						category: 'Business Support',
						icon: 'maintenance.png',
						description:
							'Keeping your site secure, up-to-date, and running smoothly with regular maintenance and dedicated support.',
						odd: true,
					},
					{
						id: 'speed',
						title: 'Website Speed Optimization',
						category: 'Business Support',
						icon: 'percentage.png',
						description:
							"Enhance your site's loading speed to improve user experience and search engine rankings.",
					},
				].map((service, index) => (
					<motion.div
						key={service.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{
							duration: 0.5,
							delay: index * 0.1, // Stagger the animations
						}}
					>
						<motion.div
							whileHover={{
								scale: 1.02,
								boxShadow:
									'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
							}}
							transition={{ duration: 0.2 }}
						>
							<ServicesCard
								id={service.id}
								title={service.title}
								href='contact'
								category={service.category}
								icon={service.icon}
								horizontal
								odd={service.odd}
							>
								{service.description}
							</ServicesCard>
						</motion.div>
					</motion.div>
				))}
			</div>
		</motion.main>
	);
}
