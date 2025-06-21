'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PrimaryBtnLink from '@/components/buttons/PrimaryBtnLink';
import TransparentBtnLink from '@/components/buttons/TransparentBtnLink';
import ServicesCard from '@/components/cards/ServicesCard';
import { tabs, services } from '@/data/ServicesData';

import heroImg1 from '@/public/imgs/ui/hero-img-1.jpg';
import heroImg3 from '@/public/imgs/ui/hero-img-3.jpg';
import Image from 'next/image';
import clsx from 'clsx';
import TestimonialSlider from '@/components/sliders/TestimonialSlider';

export default function Home() {
  const [activeTab, setActiveTab] = useState('webdev');

  return (
    <main id="main-content" className="flex flex-col flex-wrap justify-between items-center p-4 mx-auto mt-16 max-w-(--breakpoint-xl)">
      <div className="my-20 hero">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center px-4 py-3 mb-8 bg-blue-100 rounded-full shadow-md max-w-fit"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                backgroundColor: ['#2563eb', '#1d4ed8', '#2563eb']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className='mr-2 w-2 h-2 text-5xl text-transparent bg-blue-600 rounded-full'
            >.</motion.span>
            <h1 className='text-base text-[#232BB1] font-lexend font-semibold tracking-wide'>MainStreet Digital - Your Business, Our Digital Expertise</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-6 max-w-2xl text-5xl font-bold tracking-tight leading-tight text-gray-900 capitalize dark:text-white font-lexend">Transform Your Business with Expert Digital Solutions</h2>
            <p className="mb-4 max-w-2xl text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600 font-inter">Elevate your online presence with our comprehensive digital services tailored for small businesses.</p>

            <p className="mb-6 max-w-2xl text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600 font-inter">We combine cutting-edge technology and big-agency expertise with a deep understanding of the digital landscape to boost your online presence, connect you with more customers, and empower your business to succeed online.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PrimaryBtnLink size="md" href="/contact" className="group">
                Get Started
                <motion.svg
                  whileHover={{ x: 5 }}
                  className="w-6 h-6 transition-all text-currentColor dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </motion.svg>
              </PrimaryBtnLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <TransparentBtnLink href="/services">Learn More</TransparentBtnLink>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid relative grid-cols-1 gap-4 mt-12 md:grid-cols-2"
        >
          <div className="hidden md:block relative w-full h-[300px] md:h-[400px] rounded-lg">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'relative' }}
            >
              <Image
                src={heroImg1}
                alt="Hero image 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover rounded-lg"
                quality={90}
              />
            </motion.div>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'relative' }}
            >
              <Image
                src={heroImg3}
                alt="Hero image 3"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover rounded-lg"
                quality={90}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center font-lexend"
        >
          Our Services
        </motion.h2>

        {/* Tabs - visible only on md and above */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  'px-6 py-3 font-semibold transition-colors duration-200 font-lexend text-lg',
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                )}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {services[activeTab].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 // Stagger the animations
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ServicesCard
                      title={service.title}
                      href={service.href}
                      category={service.category}
                      icon={service.icon}
                    >
                      {service.description}
                    </ServicesCard>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile view - all services listed */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {Object.values(services).flat().map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 // Stagger the animations
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2 }}
              >
                <ServicesCard
                  title={service.title}
                  href={service.href}
                  category={service.category}
                  icon={service.icon}
                >
                  {service.description}
                </ServicesCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* <div className="px-4 py-12 mx-auto w-full max-w-6xl"> */}

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center font-lexend"
        >
          What Past Clients Say
        </motion.h2>
        <TestimonialSlider />
      </motion.section>
    </main>
  );
}
