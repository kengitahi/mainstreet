'use client'

import { motion } from 'framer-motion';
import ServicesCard from '@/components/cards/ServicesCard';
import { servicesPageData } from '@/data/services';

export default function Services() {
  const { title, subtitle, description } = servicesPageData;

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
        <h2 className='mb-4 text-5xl font-bold leading-tight capitalize font-lexend'>{title}</h2>
        <p className='mb-8 leading-relaxed text-gray-600 md:text-lg lg:text-xl font-inter'>{description}</p>
      </motion.div>

      <div className='services-cards-horizontal'>
        {servicesPageData.allServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
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
                odd={index % 2 !== 0}
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
